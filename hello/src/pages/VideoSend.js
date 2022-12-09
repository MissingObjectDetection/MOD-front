import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import styled from 'styled-components';
import CSRFToken from './CSRFToken';

const VideoSend = () => {
  const [path, setPath] = useState({});

  const onDrop = (files) => {
    //formData, config
    let formData = new FormData();
    const config = {
      header: {
        'content-type': 'multipart/form-data',
        'X-CSRFToken': CSRFToken,
      },
    };
    formData.append('file', files[0]);
    console.log(files[0]);

    // post 요청
    Axios.post('http://3.37.87.189:8000/mod/upload/', formData, config)
      .then((response) => {
        console.log('여기 출력 되는지 확인');
        //서버 전송에 성공
        //생각해보니까 응답 json에 success가 있나?

        console.log(response.data);

        //videoType이 true면 영상 출력 가능
        const videoType = files[0].type.includes('video');
        setPath({
          url: 'http://3.37.87.189:8000/media/' + response.data.video,
          video: videoType,
        });

        //setPath 잘됐는지 확인 하셈
        console.log(path.url);
        console.log(path.video);
      })
      .catch(function (error) {
        console.log(error);
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
