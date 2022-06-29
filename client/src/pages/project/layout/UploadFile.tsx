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
      <div className="flex w-9 h-12 items-center    bg-green-100 rounded-xl">
        <label
          htmlFor="files"
          className=" items-center text-sm cursor-pointer   "
        >
          <svg
            className="w-8 h-8 stroke-primary"
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
