import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ONE_PROJECT } from "../../api/queries/Project";
import { Nav } from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

export const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject]: [any, Function] = useState([]);
  const [getProject, { loading, error, data }] = useLazyQuery(GET_ONE_PROJECT);
  useEffect(() => {
    if (id !== undefined) {
      getProject({
        variables: { projectId: Number(id) },
      });
    }
  }, [id, getProject]);

  useEffect(() => {
    if (data) {
      setProject(data.getProject);
      console.log(data.getProject);
    }
  }, [data]);

  return (
    <div className="flex flex-row w-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col">
        <Nav page={"Projects"} />
        <h3>{project.title}</h3>
      </div>
    </div>
  );
};
