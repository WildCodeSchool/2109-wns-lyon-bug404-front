import React from 'react';
import AddTask from '../tasks/AddTask';

const TaskHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center my-4">
      <div className="flex flex-row justify-start items-center mt-2">
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
      <AddTask />
    </div>
  );
};

export default TaskHeader;
