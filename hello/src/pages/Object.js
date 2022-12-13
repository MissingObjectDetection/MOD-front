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
        <p>Class : Backpack</p>
        <p>Owner : #1</p>
      </div>
    </div>
  );
}

export default Object;
