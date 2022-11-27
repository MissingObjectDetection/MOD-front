import React from 'react';

const User = ({ userData }) => {
  console.log(userData.name);
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const Missing = () => {
  const users = [
    { email: '가방', name: '홍길동' },
    { email: '모자', name: '임인범' },
    { email: '핸드폰', name: '신승건' },
    { email: '지갑', name: '이현호' },
  ]; // 예를들어 서버에서 받오온 데이터라면

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>소지품</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          // map함수를 이용하여 오브젝트 하나하나씩 가져온다
          // User는 자식 컴포넌트
          // userData는 prop로써 자식한테 데이터를 넘겨준다는 의미
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Missing;
