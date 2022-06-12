import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ALL_PROJECTS } from '../../api/queries/Project';
import { Nav } from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import { ProjectInterfaceList } from '../../interfaces/ProjectInterface';
import ProjectListItem from './ProjectListItem';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { data, refetch: refetchProjects } = useQuery(GET_ALL_PROJECTS);
  useEffect(() => {
    if (data) {
      setProjects(data.getProjects);
    }
  }, [data]);
  return (
    <div className="flex flex-row w-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col">
        <Nav page={'Projects'} />
        <div className="p-8 bg-slate-400 ">
          {projects.length > 0 && (
            <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {projects.map((project: ProjectInterfaceList) => (
                <ProjectListItem project={project} key={project.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
