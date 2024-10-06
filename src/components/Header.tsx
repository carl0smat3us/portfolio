import { useState, useEffect, useRef } from 'react';
import { List, X } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for the menu element
  const buttonRef = useRef<HTMLDivElement | null>(null); // Ref for the hamburger button

  const HEADER_LINKS = [
    {
      label: 'home',
      url: '/'
    },
    {
      label: 'about me',
      url: '#about'
    },
    {
      label: 'projects',
      url: '#projects'
    },
    {
      label: 'experiences',
      url: '/experiences'
    },
    {
      label: 'contact',
      url: '#contact'
    }
  ];

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    if (url.startsWith('#')) {
      event.preventDefault(); // Prevent default anchor link behavior
      const targetId = url.substring(1); // Remove the '#' from the URL
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
      }
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of the menu or hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <header className="flex items-center justify-between py-6">
      <span className="font-black text-3xl">C.</span>

      {/* Hamburger menu icon for smaller devices */}
      <div className="md:hidden" ref={buttonRef}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <List size={32} />} {/* Toggle between icons */}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        ref={menuRef} // Ref for the menu
        className={clsx(
          "flex-col md:flex md:flex-row gap-4 font-medium absolute md:static top-16 left-0 right-0 px-[50px] md:px-0 bg-white py-8 md:p-0 transition-transform",
          {
            hidden: !isMenuOpen, // Hide menu when `isMenuOpen` is false
            flex: isMenuOpen, // Show menu when `isMenuOpen` is true
          }
        )}
      >
        {HEADER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            onClick={(e) => handleLinkClick(e, link.url)} // Call handleLinkClick on link click
            className={clsx('text-black', {
              'text-gray-400': link.url === pathname
            })}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
