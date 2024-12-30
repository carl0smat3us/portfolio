import { Project } from '../@types'

export default function ProjectItem({ id, cover }: Project) {
  return (
    <a href={`/project/${id}`}>
      <div className="border border-black h-64 w-full bg-[rgb(233,233,233)] bg-cover" style={{
        backgroundImage: `url(${cover})`
      }}/>
    </a>
  )
}
