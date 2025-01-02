import { NavLink, useParams } from "react-router-dom"
import Header from "../components/Header"
import { CaretLeft } from "@phosphor-icons/react"
import { PROJECTS } from "../constants"
import clsx from "clsx"
import { Helmet } from "react-helmet-async"

export default function Project() {
  const { id } = useParams()

  const project = PROJECTS.find((p) => p.id === id)

  return (
    <section className="custom-width">
      <Helmet>
        <title>Carlos Mateus | {project?.title}</title>
        <meta name="description" content={project?.description} />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carlos Mateus" />
        <meta property="og:description" content={project?.description} />
        <meta property="og:image" content={project?.cover} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Carlos Mateus | ${project?.title}`}
        />
        <meta name="twitter:description" content={project?.description} />
        <meta name="twitter:image" content={project?.cover} />
      </Helmet>

      <Header />
      <NavLink to="/projects">
        <button>
          <CaretLeft size={20} className="mt-12" />
        </button>
      </NavLink>
      <div className="flex flex-wrap justify-between">
        <article
          className={clsx("bg-white", {
            "lg:w-[42%]": project?.type === "web",
            "lg:w-[60%]": project?.type === "mobile",
          })}
        >
          <h1 className="font-semibold text-4xl mt-6">{project?.title}</h1>
          <p className="text-gray-500 mt-4">{project?.description}</p>
          <article className="mt-5">
            <h2 className="text-xl font-medium">Skills and deliverables</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project?.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[#7B7B7B] bg-[#E5E5E5] h-[56px] px-4 flex items-center justify-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
          {project?.preview && (
            <article className="mt-5 mb-10">
              <h2 className="text-xl font-medium">Preview</h2>
              <a
                className="mt-6 text-violet-400 underline"
                href={project?.preview}
                target="_blank"
              >
                {project?.preview}
              </a>
            </article>
          )}
        </article>
        <article
          className={clsx("bg-white", {
            "lg:w-[50%]": project?.type === "web",
            "lg:w-[34%]": project?.type === "mobile",
          })}
        >
          {project?.photos.map((photo, index) => (
            <div key={index} className="mb-10">
              <img className="mb-4" src={photo.path} />
              <p className="text-gray-400">{photo.label}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
