import React from 'react';

const AddTask = () => {
  return (
    <button type="button" className="secondaryBtn bg-secondary-100 w-28">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="mr-2"
        aria-hidden="true"
      >
        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
      </svg>
      task
    </button>
  );
};

export default AddTask;
