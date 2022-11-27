import React, { useState } from 'react';

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    tel: '',
  });

  // 사실 밑에서 inputs.name 이렇게 해도 무방하다
  const { name, email, tel } = inputs; //es6 분해기법

  const Change = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs, // 복사본
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름 : </label>
        <input type='text' id='name' value={inputs.name} onChange={Change} />
      </div>

      <div>
        <label>이메일 : </label>
        <input type='email' id='email' value={email} onChange={Change} />
      </div>

      <div>
        <label>전화번호 : </label>
        <input type='tel' id='tel' value={tel} onChange={Change} />
      </div>

      <p>이름 : {name}</p>
      <p>이메일 : {email}</p>
      <p>전화번호 : {tel}</p>
    </div>
  );
};

export default Input2;
