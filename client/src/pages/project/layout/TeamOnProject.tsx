import React from 'react';

const TeamOnProject = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-row justify-start items-center my-4">
        <svg
          className="h-6 w-6 stroke-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <h2 className="font-medium text-primary mt-1">Team</h2>
      </div>
    </div>
  );
};

export default TeamOnProject;
