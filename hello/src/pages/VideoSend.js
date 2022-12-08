import React, { useState } from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

const VideoUploadPage = () => {
  const onDrop = (files) => {
    //올린파일에대한 정보가 files에대입

    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);

    console.log(files);

    Axios.post('3.37.87.189/mod/upload', formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert('비디오 업로드를 실패했습니다.');
      }
    });
  };

  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '2rem auto',
      }}
    >
      {/* Drop zone 부분*/}

      <Dropzone onDrop={onDrop} multiple={false} maxSize={1000000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: '300px',
              height: '240px',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <PlusOutlined style={{ fontSize: '5rem' }} />
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default VideoUploadPage;
