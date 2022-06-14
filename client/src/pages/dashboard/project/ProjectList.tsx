import { ProjectCard } from './ProjectCard';

interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  state: string;
  created_by: {
    firstName: string;
    familyName: string;
  };
}
export const ProjectList = ({
  projects
}: {
  projects: ProjectInterface[];
}): JSX.Element => {
  return (
    <div className=" grid grid-cols-5 gap-0  px-8 cursor-pointer">
      {projects && (
        <>
          {projects
            .slice(projects.length - 4, projects.length)
            .reverse()
            .map((project: ProjectInterface) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </>
      )}
      <div className="">
        <a
          href="/new"
          className="w-56 h-56 hover:border-primary hover:border-solid hover:bg-white hover:text-primary group  flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
        >
          <svg
            className="group-hover:text-primary mb-1 text-slate-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New project
        </a>
      </div>
    </div>
  );
};
