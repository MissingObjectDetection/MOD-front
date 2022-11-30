import React, { useState } from 'react';
import styled from 'styled-components';

const First = () => {
  const [file, setFile] = useState({});

  const imageUpload = (e) => {
    const imageTpye = e.target.files[0].type.includes('image');
    const videoTpye = e.target.files[0].type.includes('video');

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageTpye,
      video: videoTpye,
    });
    console.log(imageTpye);
  };

  return (
    <Wrap>
      <h1>1번</h1>
      <input type='file' onChange={imageUpload} />
      {file.image && <img src={file.url} />}
      {file.video && <video src={file.url} controls width='350px' />}
    </Wrap>
  );
};

export default First;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
