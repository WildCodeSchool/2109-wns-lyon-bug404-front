import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TASKS } from "../../../api/queries/Task";
import { TaskCard } from "./TaskCard";

interface TaskInterface {
  id: number;
  title: string;
  due_date: Date;
  project: [
    {
      title: string;
    }
  ];
}

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  useEffect(() => {
    if (data) setTasks(data.getTasks);
  }, [data]);
  return (
    <div className="flex flex-col">
      {tasks && (
        <>
          {/* {tasks.slice(0, 3).map((task: TaskInterface) => (
            <TaskCard task={task} />
          ))} */}
        </>
      )}
    </div>
  );
};
