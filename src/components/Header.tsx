import { useState, useEffect, useRef, useCallback } from 'react'
import { List, X } from '@phosphor-icons/react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

export default function Header() {
  const location = useLocation()
  const { pathname, hash } = location
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const HEADER_LINKS = [
    { label: 'home', url: '/' },
    { label: 'about me', url: '/#about' },
    { label: 'projects', url: '/#projects' },
    { label: 'experiences', url: '/experiences' },
    { label: 'contact', url: '/#contact' }
  ]

  const scrollToHash = useCallback((hash: string) => {
    if (hash) {
      const targetId = hash.substring(1) // Remove '#' from the hash
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })

        // Remove the hash from the URL
        window.history.pushState(null, '', pathname) // Update URL without reloading the page
      }
    }
  }, [pathname])

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
    if (url.startsWith('#')) {
      event.preventDefault() // Prevent default anchor link behavior
      scrollToHash(url)
    }
    setIsMenuOpen(false) // Close the menu after clicking a link
  }

  // Scroll to the element when the hash changes
  useEffect(() => {
    if (hash) {
      scrollToHash(hash)
    }
  }, [hash, pathname, scrollToHash])

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of the menu or the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside) // Add event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside) // Clean up event listener
    }
  }, [])

  return (
    <header className="flex items-center justify-between py-6">
      <NavLink className="font-black text-3xl" to='/'>C.</NavLink>

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
          'flex-col md:flex md:flex-row gap-4 font-medium absolute md:static top-16 left-0 right-0 px-[50px] md:px-0 bg-white py-8 md:p-0 transition-transform',
          {
            hidden: !isMenuOpen, // Hide menu when `isMenuOpen` is false
            flex: isMenuOpen, // Show menu when `isMenuOpen` is true
          }
        )}
      >
        {HEADER_LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.url}
            onClick={(e) => handleLinkClick(e, link.url)} // Call handleLinkClick on link click
            className={clsx('text-black', {
              'text-gray-400': link.url === pathname
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
