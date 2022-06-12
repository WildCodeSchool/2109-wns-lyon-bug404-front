import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ONE_PROJECT } from '../../api/queries/Project';
import { GET_STATUS_BY_PROJECT_ID } from '../../api/queries/Status';
import { Nav } from '../../components/Nav';
import { ProjectBadge } from '../../components/ProjectBadge';
import Sidebar from '../../components/Sidebar';
import { TaskDashboardInterface } from '../../interfaces/TaskDashboardInterface';
import { TaskList } from '../dashboard/task/TaskList';
import TaskBadge from './tasks/TaskBadge';

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject]: [any, Function] = useState([]);
  const [status, setStatus]: [any, Function] = useState([]);
  const [taskList, setTaskList]: [any, Function] = useState([]);
  const [projectId, setProjectId]: [string, Function] = useState('');
  const [getProject, { data }] = useLazyQuery(GET_ONE_PROJECT);
  const [getProjectStatus, { data: statusData }] = useLazyQuery(
    GET_STATUS_BY_PROJECT_ID
  );
  useEffect(() => {
    if (id !== undefined) {
      getProject({
        variables: { projectId: Number(id) }
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
        variables: { projectId: Number(projectId) }
      });
    }
  }, [projectId, getProjectStatus]);

  useEffect(() => {
    if (statusData) {
      setTaskList(statusData.getStatusByProjectID);
    } else {
      setTaskList([]);
    }
  }, [statusData]);

  return (
    <>
      {project && taskList && (
        <div className="flex flex-row w-screen">
          <div className="basis-1/5">
            <Sidebar />
          </div>
          <div className="basis-4/5 flex flex-col">
            <Nav page={'Projects'} />
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
              {taskList.length > 0 ? (
                <>
                  <div className="taskSection grid grid-cols-4 gap-4">
                    <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                      <h2 className="font-medium text-neutral-700 ">To do</h2>
                      {taskList && (
                        <>
                          {taskList
                            .filter(
                              (task: TaskDashboardInterface) =>
                                task.name === 'To do'
                            )[0]
                            .tasks.map((task: TaskDashboardInterface) => (
                              <TaskBadge task={task} />
                            ))}
                        </>
                      )}
                    </div>
                    <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                      <h2 className="font-medium text-neutral-700 ">
                        In progress
                      </h2>
                      {taskList && (
                        <>
                          {taskList
                            .filter(
                              (task: TaskDashboardInterface) =>
                                task.name === 'In progress'
                            )[0]
                            .tasks.map((task: TaskDashboardInterface) => (
                              <TaskBadge task={task} />
                            ))}
                        </>
                      )}
                    </div>
                    <div className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center">
                      <h2 className="font-medium text-neutral-700 ">Done</h2>
                      {taskList && (
                        <>
                          {taskList
                            .filter(
                              (task: TaskDashboardInterface) =>
                                task.name === 'Done'
                            )[0]
                            .tasks.map((task: TaskDashboardInterface) => (
                              <TaskBadge task={task} />
                            ))}
                        </>
                      )}
                    </div>

                    <div className="bg-yellow-200 h-96 rounded-xl">
                      {/* <a
                        href="/new"
                        className=" bg-neutral-100 h-96 rounded-xl hover:border-primary hover:border-solid hover:bg-white hover:text-primary group  flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
                      > */}
                      <div className=" bg-neutral-100 h-96 rounded-xl hover:border-primary hover:border-solid hover:bg-white hover:text-primary group  flex flex-col items-center justify-center border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
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
                      </div>
                      {/* </a> */}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    role="status"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-secondary-100"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    ></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
