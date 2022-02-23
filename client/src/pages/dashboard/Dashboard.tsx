import { Nav } from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col">
        <Nav page={"Home"} />
        {/* <div className="">
          <Projects />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
