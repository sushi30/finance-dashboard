import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as API from '../../../API';

export default function MyDropZone({
  hoverComponent: Hover,
  standbyComponent: Standby
}) {
  const onDrop = useCallback(async acceptedFiles => {
    await API.uploadFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Hover />
      ) : (
        <Standby/>
      )}
    </div>
  );
}
