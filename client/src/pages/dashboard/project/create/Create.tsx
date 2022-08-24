import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {
  CREATE_PROJECT,
  INITIATE_TASK_FOR_PROJECT
} from '../../../../api/mutations/Project';
import { useAuth } from '../../../../hooks/auth.hook';
import Modal from '../../../../layout/Modal';

const Create = ({ refetchProjects }: { refetchProjects: Function }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('The lightest frisbee');
  const [description, setDescription] = useState(
    'Best new light fly disk with a 3D printing technology'
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [doCreateProject] = useMutation(CREATE_PROJECT);
  const [doInitiateTask] = useMutation(INITIATE_TASK_FOR_PROJECT);

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await doCreateProject({
        variables: {
          project: {
            title: title,
            description: description,
            start_date: startDate,
            end_date: endDate
          },
          userId: user!.id
        }
      });
      if (result.data) {
        // success
        await doInitiateTask({
          variables: {
            projectId: parseFloat(result.data.createProject.id)
          }
        });
        await refetchProjects();
        setShowModal(false);
      }
    } catch (error: any) {
      // throw setErrorMessage(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <button
        type="button"
        className="secondaryBtn bg-secondary-100"
        onClick={handleOpen}
      >
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
      {showModal && (
        <Modal handleClose={handleClose}>
          <div className="flex flex-col ">
            <h2 className=" font-bold text-3xl text-zinc-700 mt-1 mx-auto">
              New project
            </h2>
            <form className="">
              <div className="">
                <label className=" text-sm font-medium text-gray-700 -mb-1">
                  Title:
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="focus:ring-zinc-700 focus:border-zinc-700 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="text-sm font-medium text-gray-700 -mb-1"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={2}
                    className="shadow-sm focus:ring-zinc-700 focus:border-zinc-700 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Super project..."
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
              </div>

              {/* date picker */}

              <div date-rangepicker className="flex flex-col mt-4">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>{' '}
                  <label
                    htmlFor="about"
                    className="text-sm font-medium text-gray-700 "
                  >
                    Start date
                    <input
                      // datepicker
                      name="start"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date start"
                      onChange={(e) => setStartDate(e.target.value)}
                      value={startDate}
                    />
                  </label>
                </div>

                <div className="relative -mt-6">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <label
                    htmlFor="about"
                    className="text-sm font-medium text-gray-700 "
                  >
                    End date
                    <input
                      name="end"
                      type="date"
                      min={
                        startDate
                          ? new Date(startDate).toISOString().split('T')[0]
                          : new Date().toISOString().split('T')[0]
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date end"
                      onChange={(e) => setEndDate(e.target.value)}
                      value={endDate}
                    />
                  </label>
                </div>
              </div>
            </form>
            <div className="flex justify-around mt-2">
              <button
                onClick={handleClose}
                className="justify-center secondaryBtn w-32 bg-zinc-500"
              >
                Close
              </button>
              <button
                type="button"
                className="justify-center secondaryBtn w-32 bg-secondary-100"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Create;
