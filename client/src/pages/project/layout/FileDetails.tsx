import React, { useEffect, useState } from 'react';
import { FileInterface } from '../../../interfaces/FileInterface';
import Modal from '../../../layout/Modal';
const pdfImg = require('../../../assets/pdf.png');
const imageImg = require('../../../assets/image.png');

const FileDetails = ({ file }: { file: FileInterface }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    console.log('hi');
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <div
      className="flex flex-row  p-2 items-center cursor-pointer"
      onClick={handleOpen}
    >
      {/* icon */}
      <div>
        <img alt="hi" src={imageImg} className="h-9 w-9" />
      </div>
      {/* content */}
      <div className="text-sm">{file.filename}</div>

      {showModal && (
        <Modal handleClose={handleClose}>
          <>
            <img alt="hi" src={file.publicUrl} />
            <button
              onClick={handleClose}
              className="justify-center secondaryBtn w-32 bg-zinc-500"
            >
              Close
            </button>
          </>
        </Modal>
      )}
    </div>
  );
};

export default FileDetails;
