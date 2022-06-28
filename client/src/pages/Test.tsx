import { useMutation } from '@apollo/client';
import React from 'react';
import { UPLOAD_FILE } from '../api/mutations/Upload';

const Test = () => {
  const [doUpload] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data)
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    doUpload({
      variables: { file, projectId: 1 }
    });
  };

  return (
    <div className="p-4">
      Test
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default Test;
