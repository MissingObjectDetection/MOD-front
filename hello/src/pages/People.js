import React from 'react';
import { useState } from 'react';

const People = () => {
  let [title, setTitle] = useState(['사람 1', '사람 2', '사람 3']);
  let [like, setLike] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          let copy = [...title]; //새로운 베열 만들기 위해서 spread 문법 사용
          copy[0] = '새로운 리스트';
          setTitle(copy);
        }}
      >
        글수정
      </button>

      <div className='list'>
        <h4>
          <span> 🏃🏻 </span>
          {title[0]}{' '}
          {/* <span
            onClick={() => {
              setLike(like + 1);
            }}></span>
          {like} */}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          <span> 🏃🏻 </span>
          {title[1]}
          {/* {like} */}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          <span> 🏃🏻 </span>
          {title[2]}
          {/* {like} */}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
};

export default People;
