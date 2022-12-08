import React, { useState } from 'react';
import styled from 'styled-components';

const VideoUpload = () => {
  const [file, setFile] = useState({});

  const imageUpload = (e) => {
    const videoType = e.target.files[0].type.includes('video');

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      video: videoType,
    });
    console.log(file);
  };

  return (
    <Wrap>
      <input type='file' onChange={imageUpload} />
      {file.video && <video src={file.url} controls width='1000px' />}
    </Wrap>
  );
};

export default VideoUpload;

const Wrap = styled.div`
  border: 1px solid gray;
  margin-top: 10px;
  padding: 10px;
  background: #eee;
  text-align: left;
`;
