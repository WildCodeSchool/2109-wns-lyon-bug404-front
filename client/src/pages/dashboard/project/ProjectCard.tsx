import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectBadge } from "../../../components/ProjectBadge";

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

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectCard"
      onClick={() => {
        navigate(`/projects/${project.id}`);
      }}
    >
      <div className="card hover:shadow-lg ">
        <div className="m-4 flex flex-col justify-between h-5/6 ">
          <div className="div">
            <span className="font-bold">{project.title}</span>
            <span className="block text-gray-500 text-sm mt-2">
              {project.description}
            </span>
          </div>
          <ProjectBadge state={project.state} />
        </div>
      </div>
    </div>
  );
};
