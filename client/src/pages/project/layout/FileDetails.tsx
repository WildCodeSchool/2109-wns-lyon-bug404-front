import React, { useEffect, useState } from 'react';
import { FileInterface } from '../../../interfaces/FileInterface';
import Modal from '../../../layout/Modal';
import FileModalContent from './file/FileModalContent';
const pdfImg = require('../../../assets/pdf.png');
const imageImg = require('../../../assets/image.png');
const docImg = require('../../../assets/doc.png');

const FileDetails = ({ file }: { file: FileInterface }) => {
  const [showModal, setShowModal] = useState(false);
  const [fileExtension, setFileExtension] = useState('');
  const [close, setClose] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [isDoc, setIsDoc] = useState(false);
  const [isPdf, setIsPdf] = useState(false);

  const getFileExtension = () => {
    const ext = file.filename.split('.').pop();
    if (ext) {
      setFileExtension(ext);
    }
  };
  useEffect(() => {
    getFileExtension();
  }, []);

  useEffect(() => {
    if (
      fileExtension === 'png' ||
      fileExtension === 'jpg' ||
      fileExtension === 'jpeg' ||
      fileExtension === 'tiff' ||
      fileExtension === 'bmp' ||
      fileExtension === 'gif'
    ) {
      setIsImage(true);
      setIsDoc(false);
      setIsPdf(false);
    }
    if (fileExtension === 'pdf') {
      setIsImage(false);
      setIsPdf(true);
      setIsDoc(false);
    }
    if (fileExtension === 'docx' || fileExtension === 'doc') {
      setIsImage(false);
      setIsPdf(false);
      setIsDoc(true);
    }
  }, [fileExtension]);

  const handleClose = async () => {
    setClose(true);
  };
  const handleOpen = () => {
    setShowModal(true);
  };
  useEffect(() => {
    if (close) {
      setShowModal(false);
    }
  }, [close]);

  return (
    <div
      className="flex flex-row  p-2 items-center cursor-pointer hover:bg-gray-200 rounded-md "
      onClick={
        isImage
          ? handleOpen
          : () => {
              window.open(file.publicUrl, '_blank');
            }
      }
    >
      {/* icon */}
      <div>
        {isPdf && <img alt="hi" src={pdfImg} className="h-9 w-9" />}
        {isImage && <img alt="hi" src={imageImg} className="h-9 w-9" />}

        {isDoc && <img alt="hi" src={docImg} className="h-9 w-9" />}
      </div>
      {/* content */}
      <div className="text-sm">{file.filename}</div>

      {showModal && (
        <>
          {isImage && (
            <Modal handleClose={handleClose}>
              <>
                <FileModalContent
                  file={file}
                  handleClose={handleClose}
                  isPdf={isPdf}
                  isImage={isImage}
                  isDoc={isDoc}
                />
              </>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default FileDetails;
