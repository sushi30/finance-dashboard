import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as API from '../../../API';

export default function MyDropZone() {
  const onDrop = useCallback(async acceptedFiles => {
    console.log(acceptedFiles);
    await API.uploadFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
