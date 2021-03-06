import React, { useState } from 'react';
import { FileInterface } from '../../../interfaces/FileInterface';
import FileDetails from './FileDetails';
import FilesHeader from './FilesHeader';

const FilesList = ({ files }: { files: FileInterface[] }) => {
  const [filesList, setFilesList] = useState();

  return (
    <div className="">
      <FilesHeader />
      {files && files.length > 0 ? (
        <div className="documentBox">
          {files.map((file) => (
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
