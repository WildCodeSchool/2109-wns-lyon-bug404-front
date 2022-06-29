import React from 'react';

const AddTeam = () => {
  return (
    <div>
      <div className="flex w-9 h-12 items-center  justify-center  bg-green-100 rounded-xl mr-2 cursor-pointer">
        <svg
          className="h-6 w-6 stroke-primary "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </div>
  );
};

export default AddTeam;
