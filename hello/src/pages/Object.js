import React from 'react';
import { useState } from 'react';

function Object() {
  let [title, setTitle] = useState(['Object 1', 'Object 2', 'Object 3']);

  return (
    <div>
      <div className='list'>
        <h4>
          <span> ✔️ </span>
          {title[0]}
        </h4>
        <p>Class : Wallet</p>
        <p>Owner : #1</p>
      </div>

      <div className='list'>
        <h4>
          <span> ✔️ </span>
          {title[1]}
        </h4>
        <p>Class : backpack</p>
        <p>Owner : #2</p>
      </div>

      <div className='list'>
        <h4>
          <span> ✔️ </span>
          {title[2]}
        </h4>
        <p>Class : umbrella</p>
        <p>Owner : #3</p>
      </div>
    </div>
  );
}

export default Object;
