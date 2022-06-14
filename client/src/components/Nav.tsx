import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth.hook';
const profileImage = require('../assets/user.png');

export const Nav = ({ page }: any) => {
  const { isConnected, signout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="nav  h-20 px-8 flex justify-between items-center ">
      <div className="pageTitle text-3xl font-bold">
        <h2>{page}</h2>
      </div>
      <div className="profileSection flex flex-row items-center mt-4">
        <div className="userName">
          {user ? (
            <h3 className="text-base font-medium">
              {user.firstName} {user.familyName}
            </h3>
          ) : (
            <h3 className="text-base font-medium">User</h3>
          )}
        </div>
        <div
          className="flex-1 min-w-0 mx-auto  cursor-pointer "
          onClick={() => {
            navigate('/');
          }}
        >
          <img className="h-12 w-12 ml-2" src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
