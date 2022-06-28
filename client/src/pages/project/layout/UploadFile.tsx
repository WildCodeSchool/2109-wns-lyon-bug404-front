import { useMutation } from '@apollo/client';
import React from 'react';
import { UPLOAD_FILE } from '../../../api/mutations/Upload';

const UploadFile = ({ projectId }: { projectId: number }): JSX.Element => {
  const [doUpload] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data)
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    doUpload({
      variables: { file, projectId }
    });
  };
  return (
    <>
      <div className="mt-2 flex">
        <label
          htmlFor="files"
          className="flex flex-row text-sm cursor-pointer bg-green-100 w-40 justify-center items-center rounded-md p-1"
        >
          <svg
            className="w-8 h-8 "
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
          Select a file
        </label>
        <input
          id="files"
          type="file"
          style={{ visibility: 'hidden' }}
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default UploadFile;
