import { useEffect } from 'react';
import { Nav } from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import { useAuth } from '../../hooks/auth.hook';
import { ProjectSection } from './project/ProjectSection';
import { TaskSection } from './task/TaskSection';
const Dashboard = () => {
  const { isConnected, signout, user } = useAuth();

  return (
    <div className="flex flex-row w-screen h-screen ">
      <div className="basis-1/5">
        <Sidebar />
      </div>
      <div className="basis-4/5 flex flex-col overflow-y-scroll">
        <Nav page={'Home'} />
        <div className=" ">
          <ProjectSection />
          <TaskSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
