import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import styled from 'styled-components';

const VideoSend = () => {
  const [path, setPath] = useState({});

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    console.log(files[0]);

    Axios.post('3.37.87.189/mod/upload', formData, config).then((response) => {
      //서버 전송에 성공하면 실행
      if (response.data.success) {
        console.log(response.data);

        //videoType이 true면 영상 출력 가능
        const videoType = files[0].type.includes('video');
        setPath({
          url: '3.37.87.189:8000/media/' + response.data.video,
          video: videoType,
        });
        console.log(path.url);
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
      {/* 비디오 출력 부분 */}
      <Wrap>
        {path.video && <video src={path.url} controls width='1000px' />}
      </Wrap>{' '}
    </div>
  );
};

const Wrap = styled.div`
  border: 1px solid gray;
  margin-top: 10px;
  padding: 10px;
  background: #eee;
  text-align: left;
`;

export default VideoSend;
