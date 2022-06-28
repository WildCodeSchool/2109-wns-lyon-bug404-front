import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ONE_PROJECT } from '../../api/queries/Project';
import { GET_STATUS_BY_PROJECT_ID } from '../../api/queries/Status';
import { Nav } from '../../components/Nav';
import { ProjectBadge } from '../../components/ProjectBadge';
import Sidebar from '../../components/Sidebar';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ProjectIColumnInterface } from '../../interfaces/ProjectColumnInterface';
import { DELETE_TASK, UPDATE_TASK_STATUS } from '../../api/mutations/Task';
import DueDate from './layout/DueDate';
import UploadFile from './layout/UploadFile';
import TaskHeader from './layout/TaskHeader';
import FilesList from './layout/FilesList';
import TeamOnProject from './layout/TeamOnProject';

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject]: [any, Function] = useState([]);
  const [taskList, setTaskList]: [any, Function] = useState([]);
  const [projectId, setProjectId]: [string, Function] = useState('');
  const [getProject, { data, refetch: refetchProject }] =
    useLazyQuery(GET_ONE_PROJECT);
  const [getProjectStatus, { data: statusData, refetch: refetchStatus }] =
    useLazyQuery(GET_STATUS_BY_PROJECT_ID);
  const [doDeleteTask] = useMutation(DELETE_TASK);
  const [doUpdateTask] = useMutation(UPDATE_TASK_STATUS);
  const [columns, setColumns] = useState<any[]>([]);

  const deleteTask = async (id: any) => {
    await doDeleteTask({
      variables: { taskId: id }
    });
    await refetchStatus();
  };

  const updateTaskStatus = async (taskId: string, status: string) => {
    await doUpdateTask({
      variables: {
        statusName: status,
        taskId: Number(taskId),
        projectId: Number(projectId)
      }
    });
    await refetchStatus();
  };

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
      setColumns(statusData.getStatusByProjectID);
      setTaskList(statusData.getStatusByProjectID);
    } else {
      setTaskList([]);
    }
  }, [statusData]);

  const onDragEnd = (
    result: any,
    columns: ProjectIColumnInterface[],
    setColumns: any
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (destination.droppableId === '3') {
      const sourceColumn = columns[source.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      deleteTask(removed.id);
    } else {
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.tasks];
        const destItems = [...destColumn.tasks];

        const [removed] = sourceItems.splice(source.index, 1);

        destItems.splice(destination.index, 0, removed);
        updateTaskStatus(removed.id, destColumn.name);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            tasks: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            tasks: destItems
          }
        });
      }
      // else {
      //   const column = columns[source.droppableId];
      //   const copiedItems = [...column.tasks];
      //   const [removed] = copiedItems.splice(source.index, 1);
      //   copiedItems.splice(destination.index, 0, removed);
      //   setColumns({
      //     ...columns,
      //     [source.droppableId]: {
      //       ...column,
      //       tasks: copiedItems
      //     }
      //   });
      // }
    }
  };

  return (
    <>
      {project && taskList && (
        <div className="flex flex-row w-screen">
          <div className="basis-1/5">
            <Sidebar />
          </div>
          <div className="basis-4/5 flex flex-col ">
            <Nav page={'Projects'} />
            <div className="p-8 pt-0 flex flex-col ">
              <div className="flex flex-row justify-between ">
                <h2 className="font-bold text-secondary-100">
                  {project.title}
                </h2>
                {/* <DueDate date={project.end_date} /> */}
                <ProjectBadge state={project.state} />
              </div>
              <p className="text-sm mt-1">{project.description}</p>
              <UploadFile projectId={parseInt(projectId)} />
              <div className="flex flex-row">
                {/* left section */}
                <div className="w-8/12">
                  <TaskHeader />
                  {taskList.length > 0 ? (
                    <>
                      <div className="taskSection flex justify-between ">
                        <DragDropContext
                          onDragEnd={(result) =>
                            onDragEnd(result, columns, setColumns)
                          }
                        >
                          {Object.entries(columns).map(
                            ([columnId, column], index) => {
                              return (
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                  }}
                                  key={columnId}
                                >
                                  <h2>{column.name}</h2>
                                  <div>
                                    <Droppable
                                      droppableId={columnId}
                                      key={columnId}
                                    >
                                      {(provided, snapshot) => {
                                        return (
                                          <div
                                            className="bg-neutral-200 border-2 border-neutral-300  h-96 rounded-lg flex flex-col items-center"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                              background:
                                                snapshot.isDraggingOver
                                                  ? 'lightblue'
                                                  : 'lightgrey',
                                              padding: 4,
                                              width: 200,
                                              minHeight: 450
                                            }}
                                          >
                                            {column.tasks.map(
                                              (item: any, index: any) => {
                                                return (
                                                  <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                  >
                                                    {(provided, snapshot) => {
                                                      return (
                                                        <div
                                                          className="flex flex-row justify-start   w-full m-1 hover:bg-red-200 cursor-pointer hover:bg-opacity-70 p-1"
                                                          ref={
                                                            provided.innerRef
                                                          }
                                                          {...provided.draggableProps}
                                                          {...provided.dragHandleProps}
                                                          style={{
                                                            userSelect: 'none',
                                                            fontSize: '14px',
                                                            borderRadius: '8px',
                                                            fontWeight:
                                                              'normal',
                                                            backgroundColor:
                                                              snapshot.isDragging
                                                                ? '#263B4A'
                                                                : '#456C86',
                                                            color: 'white',
                                                            ...provided
                                                              .draggableProps
                                                              .style
                                                          }}
                                                        >
                                                          {item.title}
                                                        </div>
                                                      );
                                                    }}
                                                  </Draggable>
                                                );
                                              }
                                            )}
                                            {provided.placeholder}
                                          </div>
                                        );
                                      }}
                                    </Droppable>
                                  </div>
                                </div>
                              );
                            }
                          )}
                          <Droppable droppableId={'3'}>
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className=" border-2   h-96 rounded-lg flex flex-col "
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                  style={{
                                    background: snapshot.isDraggingOver
                                      ? '#FFEBEE'
                                      : 'white',
                                    padding: 4,
                                    width: 50,
                                    height: 50
                                  }}
                                >
                                  <div>
                                    <svg
                                      className="w-10 h-10"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                      ></path>
                                    </svg>
                                  </div>
                                  {provided.placeholder}
                                </div>
                              );
                            }}
                          </Droppable>
                        </DragDropContext>
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
                {/* right section */}
                <div className="ml-4">
                  <FilesList files={project.files} />
                  <TeamOnProject />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
