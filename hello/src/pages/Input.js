import React, { useState } from 'react';

const Input = () => {
  const [txtValue, setTexValue] = useState(''); // 동적 = state

  function Change(e) {
    setTexValue(e.target.value);
  }

  return (
    <div>
      <input type='text' value={txtValue} onChange={Change} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
