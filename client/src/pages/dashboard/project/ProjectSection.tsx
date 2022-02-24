import React from "react";
import { ProjectList } from "./ProjectList";

export const ProjectSection = () => {
  return (
    <section>
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-secondary-100">Projects</h2>
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
