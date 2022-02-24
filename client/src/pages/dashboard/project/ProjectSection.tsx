import React from "react";
import { ProjectList } from "./ProjectList";

export const ProjectSection = () => {
  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-row justify-start items-center my-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-secondary-100 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <h2 className="font-bold text-secondary-100 mt-1">Projects</h2>
          </div>
          <button type="button" className="secondaryBtn bg-secondary-100">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="mr-2"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Add project
          </button>
        </div>
      </header>

      <ProjectList />
      <div className="link">
        <a href="/projects">See all projects</a>
      </div>
    </section>
  );
};
