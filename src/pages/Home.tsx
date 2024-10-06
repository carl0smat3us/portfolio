import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectItem from "../components/ProjectItem";

import { LinkedinLogo, TwitterLogo, DribbbleLogo } from "@phosphor-icons/react";

export default function Home() {
  // Total number of available projects (for example, 10)
  const totalProjects = 10;
  
  // State that controls how many projects are initially displayed
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, totalProjects));
  };

  return (
    <section className="custom-width">
      <Header />
      <article className="h-[50vh] mt-[20vh] mb-[50vh] flex items-center">
        <div>
          <span>Hello I&rsquo;m</span>
          <h1 className="font-semibold text-4xl mb-6">Carlos Mateus</h1>
          <p className="text-lg md:w-[60%] leading-10">
            Software developer with years of experience, known for building and
            delivering high-quality projects while also being a UI enthusiast,
            dedicated to creating intuitive and visually appealing user
            interfaces.
          </p>
        </div>
      </article>

      <article
        id="about"
        className="h-[50vh] mb-[20vh] flex items-center justify-center py-12"
      >
        <div className="md:w-[80%]">
          <h2 className="font-semibold text-3xl text-center mb-6">About me</h2>
          <p className="text-lg text-center leading-10">
            I'm Carlos Mateus, a <u>software developer</u> proficient in Python,
            Node.js, and JavaScript, with extensive knowledge in <u>databases</u> and
            <u> development tools</u>. I have a keen interest in <u>UI design</u> and
            pixel art, which I pursue alongside my technical work. In addition to
            my native Portuguese, I am fluent in English and French, and I enjoy
            learning new languages.
          </p>
        </div>
      </article>

      <article id="projects" className="flex flex-col justify-center py-12">
        <div>
          <h2 className="font-semibold text-3xl">Last works</h2>
          <p className="text-lg">See what I've been working on lately</p>
        </div>

        {/* Rendering the projects */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[10vh]">
          {Array.from({ length: visibleProjects }).map((_, index) => (
            <ProjectItem key={index} />
          ))}
        </div>

        {/* "Load more" button */}
        {visibleProjects < totalProjects && (
          <div className="relative group self-center">
          <button onClick={loadMoreProjects} className="relative py-2 px-4 bg-white border border-black overflow-hidden">
            <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
            <span className="relative text-base text-black transition-colors duration-300 group-hover:text-white">
              Load more projects
            </span>
          </button>
        </div>
        
        )}
      </article>


      <article id="contact" className="mt-[20vh] flex flex-wrap justify-between py-12">
        <div className="flex flex-col gap-[25px]">
          <h2 className="font-semibold text-3xl">
            Let's build an incredible project together.
          </h2>
          <p className="text-lg w-[300px]">
            Fill in all the fields so we can contact you as quickly as possible.
          </p>
          <p className="text-lg w-[300px]">
            Or simply send me a message at{" "}
            <a href="mailto:hi@carlosmateus.com">
              <u>hi@carlosmateus.com</u>
            </a>.
          </p>
          <div>
            <h2 className="font-semibold text-xl w-[400px]">Social networks</h2>
            <div className="flex gap-2 mt-2">
              <LinkedinLogo size={25} />
              <TwitterLogo size={25} />
              <DribbbleLogo size={25} />
            </div>
          </div>
        </div>
        <ContactForm />
      </article>
      <Footer />
    </section>
  );
}
