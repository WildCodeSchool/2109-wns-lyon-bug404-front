import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_ALL_PROJECTS } from '../../../api/queries/Project';
import Create from './create/Create';

import { ProjectList } from './ProjectList';

export const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const { data, refetch: refetchProjects } = useQuery(GET_ALL_PROJECTS);

  useEffect(() => {
    if (data) {
      setProjects(data.getProjects);
    }
  }, [data]);

  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-row justify-start items-center my-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-secondary-100 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <h2 className="font-bold text-secondary-100 mt-1">Projects</h2>
          </div>
          <Create refetchProjects={refetchProjects} />
        </div>
      </header>

      <ProjectList projects={projects} />
      <div className="link">
        <a href="/projects">See all projects</a>
      </div>
    </section>
  );
};
