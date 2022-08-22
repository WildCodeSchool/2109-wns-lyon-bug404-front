import React, { Component, useState } from 'react';
import { FileInterface } from '../../../../interfaces/FileInterface';
import { saveAs } from 'file-saver';

import { Document, Page } from 'react-pdf';

const FileModalContent = ({
  file,
  handleClose,
  isPdf,
  isImage,
  isDoc
}: {
  file: FileInterface;
  handleClose: () => void;
  isPdf: Boolean;
  isImage: Boolean;
  isDoc: Boolean;
}) => {
  const downloadImage = () => {
    saveAs(file.publicUrl, file.filename); // Put your image url here.
  };

  return (
    <div className="flex flex-col  items-center w-full h-4/5">
      {isImage && (
        <div className="h-full w-full ">
          <svg
            onClick={downloadImage}
            className="w-6 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <img alt="hi" src={file.publicUrl} />
        </div>
      )}
      {isDoc && <>doc</>}
      {isPdf && (
        <>
          <div></div>
        </>
      )}

      <button
        onClick={handleClose}
        className="justify-center secondaryBtn w-32 bg-zinc-500 mt-2"
      >
        Close
      </button>
    </div>
  );
};

export default FileModalContent;
