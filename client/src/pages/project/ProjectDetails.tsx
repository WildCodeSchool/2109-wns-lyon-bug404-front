import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ONE_PROJECT } from "../../api/queries/Project";
import { GET_STATUS_BY_PROJECT_ID } from "../../api/queries/Status";
import { Nav } from "../../components/Nav";
import { ProjectBadge } from "../../components/ProjectBadge";
import Sidebar from "../../components/Sidebar";

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject]: [any, Function] = useState([]);
  const [status, setStatus]: [any, Function] = useState([]);
  const [projectId, setProjectId]: [string, Function] = useState("");
  const [getProject, { loading, error, data }] = useLazyQuery(GET_ONE_PROJECT);
  const [getProjectStatus, { data: statusData }] = useLazyQuery(
    GET_STATUS_BY_PROJECT_ID
  );
  useEffect(() => {
    if (id !== undefined) {
      getProject({
        variables: { projectId: Number(id) },
      });
    }
  }, [id, getProject]);

  useEffect(() => {
    if (data) {
      setProject(data.getProject);
      setProjectId(data.getProject.id);
    }
  }, [data]);

  useEffect(() => {
    if (projectId !== undefined) {
      getProjectStatus({
        variables: { projectId: Number(projectId) },
      });
    }
  }, [projectId, getProjectStatus]);

  useEffect(() => {
    if (statusData) {
      console.log(statusData.getStatusByProjectID);
      // setStatus(data.getProject);
      // setProjectId(data.getProject.id);
    }
  }, [statusData]);

  return (
    <>
      {project && (
        <div className="flex flex-row w-screen">
          <div className="basis-1/5">
            <Sidebar />
          </div>
          <div className="basis-4/5 flex flex-col">
            <Nav page={"Projects"} />
            <div className="p-8 pt-0 flex flex-col w-4/5">
              <div className="flex flex-row justify-between ">
                <h2 className="font-bold text-secondary-100">
                  {project.title}
                </h2>
                <ProjectBadge state={project.state} />
              </div>
              <p className="text-sm mt-1">{project.description}</p>
              <div className="flex flex-row justify-start items-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <h2 className="font-medium text-primary mt-1">Tasks</h2>
              </div>
              <div className="taskSection grid grid-cols-4 gap-4">
                <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                  <h2 className="font-medium text-neutral-700 ">To do</h2>
                </div>
                <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                  <h2 className="font-medium text-neutral-700 ">In progress</h2>
                </div>
                <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                  <h2 className="font-medium text-neutral-700 ">Done</h2>
                </div>

                <div className="bg-yellow-200 h-96 rounded-xl">
                  <a
                    href="/new"
                    className=" bg-neutral-100 h-96 rounded-xl hover:border-primary hover:border-solid hover:bg-white hover:text-primary group  flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
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
                    New section
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
