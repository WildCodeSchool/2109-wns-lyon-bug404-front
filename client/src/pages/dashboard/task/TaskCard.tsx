import { format } from "date-fns";
import { TaskDashboardInterface } from "../../../interfaces/TaskDashboardInterface";

export const TaskCard = ({ task }: { task: TaskDashboardInterface }) => {
  return (
    <div className="px-5">
      <div className="cardTask">
        <div className=" flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10  ml-2 stroke-stone-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex flex-col ml-2">
            <div className="text-gray-900 font-bold ">{task.title}</div>
            <div className="grid grid-flow-col-dense  ">
              <p className="text-gray-700 text-base">
                From project : {task.project.title}
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm  p-2  items-center flex flex-col justify-center mr-2">
          <p className="text-primary font-bold text-2xl">
            {format(new Date(task.due_date), "dd")}
          </p>
          <p className="text-black -mt-2">
            {/* {new Date(task.due_date).getMonth()} */}
            {format(new Date(task.due_date), "MMMM")}
          </p>
        </div>
      </div>
    </div>
  );
};
