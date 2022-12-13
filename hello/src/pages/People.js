import React from 'react';
import { useState } from 'react';

const People = () => {
  let [title, setTitle] = useState(['Person 1', 'Person 2', 'Person 3']);
  let [like, setLike] = useState(0);

  setTimeout(People, 3);

  return (
    <div>
      {/* <button
        onClick={() => {
          let copy = [...title]; //새로운 베열 만들기 위해서 spread 문법 사용
          copy[0] = '새로운 리스트';
          setTitle(copy);
        }}
      >
        글수정
      </button> */}

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
        <p>Entrance : 00:02</p>
        <p>Exit : None</p>
      </div>
    </div>
  );
};

export default People;
