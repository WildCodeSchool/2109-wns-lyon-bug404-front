import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_PROFILE } from '../../api/queries/User';
import { Nav } from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import { ProjectSection } from './project/ProjectSection';
import { TaskSection } from './task/TaskSection';
const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log('1');
    if (data) {
      setIsConnected(true);
      console.log(data);
    }
  }, [data]);
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
