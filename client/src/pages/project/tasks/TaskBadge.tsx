import React from 'react';
import { TaskDashboardInterface } from '../../../interfaces/TaskDashboardInterface';

const TaskBadge = ({ task }: { task: TaskDashboardInterface }) => {
  return (
    <div className="flex flex-row justify-start   w-full m-1 hover:bg-red-200 cursor-pointer hover:bg-opacity-70 p-1">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1 mt-1 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div>
        <p>{task.title}</p>
      </div>
    </div>
  );
};

export default TaskBadge;
