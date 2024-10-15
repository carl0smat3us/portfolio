import { Project } from "../@types";

export default function ProjectItem({ id }: Project) {
  return (
    <a href={`/project/${id}`}>
      <div className="skeleton border border-black h-64 w-full bg-[rgb(233,233,233)]" />
    </a>
  );
}
