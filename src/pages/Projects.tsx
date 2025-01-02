import { useForm, Controller, useWatch } from "react-hook-form"
import Header from "../components/Header"
import { PROJECTS } from "../constants"
import ProjectItem from "../components/ProjectItem"
import DropDown from "../components/DropDown"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface IOption {
  value: string
  label: string
}

interface IFormData {
  type: IOption
  sorterBy: IOption
}

export default function Projects() {
  const schema = z.object({
    type: z.object({
      value: z.string(),
      label: z.string(),
    }),
    sorterBy: z.object({
      value: z.string(),
      label: z.string(),
    }),
  })

  const { control } = useForm<IFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      sorterBy: {
        label: "Newest",
        value: "newest",
      },
      type: {
        label: "All",
        value: "all",
      },
    },
  })

  // Watch form values
  const typeFilter = useWatch({ control, name: "type" })
  const sorterBy = useWatch({ control, name: "sorterBy" })

  // Apply filters and sorting
  const filteredProjects = PROJECTS.filter((project) => {
    if (typeFilter?.value === "all") return true
    return project.type === typeFilter?.value
  }).sort((a, b) => {
    if (sorterBy?.value === "newest") {
      return (
        new Date(b.creationYear).getTime() - new Date(a.creationYear).getTime()
      )
    }
    if (sorterBy?.value === "oldest") {
      return (
        new Date(a.creationYear).getTime() - new Date(b.creationYear).getTime()
      )
    }
    return 0
  })

  return (
    <section className="custom-width">
      <Header />

      <article
        id="projects"
        className="flex flex-col justify-center py-12 mb-[20vh]"
      >
        <div className="w-full mb-8 flex justify-between items-center">
          <p className="text-lg">See what I've been working on lately</p>

          <div className="flex gap-3">
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <DropDown
                  label="Type"
                  value={field.value.value}
                  onChange={(value) =>
                    field.onChange({
                      value,
                      label: field.value.label,
                    })
                  }
                  options={[
                    { label: "Website", value: "web" },
                    { label: "Mobile App", value: "mobile" },
                    { label: "All", value: "all" },
                  ]}
                />
              )}
            />
            <Controller
              name="sorterBy"
              control={control}
              render={({ field }) => (
                <DropDown
                  label="Sorter by"
                  value={field.value.value}
                  onChange={(value) =>
                    field.onChange({
                      value,
                      label: field.value.label,
                    })
                  }
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                  ]}
                />
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-[10vh]">
          {filteredProjects.map((project, index) => (
            <ProjectItem {...project} key={index} />
          ))}
        </div>
      </article>
    </section>
  )
}
