import React, { useState } from 'react';
import { FileInterface } from '../../../interfaces/FileInterface';
import FileDetails from './FileDetails';
import FilesHeader from './FilesHeader';

const FilesList = ({
  files,
  projectId
}: {
  files: FileInterface[];
  projectId: string;
}) => {
  return (
    <div className="">
      <FilesHeader projectId={projectId} />
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
