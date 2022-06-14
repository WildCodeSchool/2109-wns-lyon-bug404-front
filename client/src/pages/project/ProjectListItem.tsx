import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectInterfaceList } from '../../interfaces/ProjectInterface';

const ProjectListItem = ({ project }: { project: ProjectInterfaceList }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full ">
      <li className="w-full justify-between px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex flex-row">
        <div
          className="cursor-pointer hover:text-primary "
          onClick={() => {
            navigate(`/projects/${project.id}`);
          }}
        >
          {project.title}
        </div>
        <div className="flex flex-row">
          {/* update */}
          <svg
            className="w-6 h-6 cursor-pointer hover:stroke-primary "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          {/* delete     */}
          <svg
            className="w-6 h-6 cursor-pointer hover:stroke-red-700 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </div>
      </li>
    </div>
  );
};

export default ProjectListItem;
