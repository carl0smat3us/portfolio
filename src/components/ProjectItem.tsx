import { Project } from "../@types"

export default function ProjectItem({
  id,
  title,
  creationYear,
  isFinished,
  cover,
}: Project) {
  return (
    <a href={`/project/${id}`}>
      <div
        className="border border-black aspect-square bg-[rgb(233,233,233)] bg-cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />

      <p className="mt-4 text-lg">
        {title} ({creationYear}
        {isFinished == false && " - ongoing"})
      </p>
    </a>
  )
}
