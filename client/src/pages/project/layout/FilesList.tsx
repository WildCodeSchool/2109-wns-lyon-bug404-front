import React, { useState } from 'react';
import { FileInterface } from '../../../interfaces/FileInterface';
import FileDetails from './FileDetails';
import FilesHeader from './FilesHeader';

const FilesList = ({ files }: { files: FileInterface[] }) => {
  return (
    <div className="">
      <FilesHeader />
      {files && files.length > 0 ? (
        <div className="documentBox">
          {files
            .slice()
            .reverse()
            .map((file) => (
              <FileDetails file={file} />
            ))}
        </div>
      ) : (
        <div>No files </div>
      )}
    </div>
  );
};

export default FilesList;
