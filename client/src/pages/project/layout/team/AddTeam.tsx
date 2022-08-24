import React, { useState } from 'react';
import Modal from '../../../../layout/Modal';

const addImg = require('../../../../assets/new.png');

const AddTeam = () => {
  const [user, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className="flex w-9 h-12 items-center  justify-center  bg-green-100 rounded-xl mr-2 cursor-pointer"
      >
        <svg
          className="h-6 w-6 stroke-primary "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      {showModal && (
        <Modal handleClose={handleClose}>
          <div className="flex flex-col justify-center items-center">
            <p>Add a team member</p>
            <img alt="add new user" src={addImg} className="h-32 w-32 mt-4" />
            <div className="flex justify-around mt-4">
              <button
                onClick={handleClose}
                className="justify-center secondaryBtn w-32 bg-zinc-500"
              >
                Close
              </button>
              <button
                type="button"
                className="justify-center secondaryBtn w-32 bg-secondary-100 ml-2"
                // onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddTeam;
