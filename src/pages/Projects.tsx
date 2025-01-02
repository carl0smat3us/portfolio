import Header from "../components/Header"
import { PROJECTS } from "../constants"
import ProjectItem from "../components/ProjectItem"

export default function Projects() {
  return (
    <section className="custom-width">
      <Header />

      <article
        id="projects"
        className="flex flex-col justify-center py-12 mb-[20vh]"
      >
        <div className="mb-8">
          <p className="text-lg">See what I've been working on lately</p>
        </div>

        {/* Rendering the projects */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-[10vh]">
          {Array.from(PROJECTS).map((project, index) => (
            <ProjectItem {...project} key={index} />
          ))}
        </div>
      </article>
    </section>
  )
}
