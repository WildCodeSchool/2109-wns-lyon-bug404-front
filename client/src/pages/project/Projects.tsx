import React from "react";
import { Nav } from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

export const Projects = () => {
  return (
    <div className="flex flex-row w-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col">
        <Nav page={"Projects"} />
        <h3>projects</h3>
      </div>
    </div>
  );
};
