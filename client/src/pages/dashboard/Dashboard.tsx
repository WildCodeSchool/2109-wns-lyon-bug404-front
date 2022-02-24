import { Nav } from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import { ProjectSection } from "./project/ProjectSection";
import { TaskSection } from "./task/TaskSection";
const Dashboard = () => {
  return (
    <div className="flex flex-row w-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col">
        <Nav page={"Home"} />
        <ProjectSection />
        <TaskSection />
      </div>
    </div>
  );
};

export default Dashboard;
