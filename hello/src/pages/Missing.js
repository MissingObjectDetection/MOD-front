import React from 'react';
import { useState } from 'react';

// const User = ({ userData }) => {
//   console.log(userData.name);
//   return (
//     <tr>
//       <td>{userData.name}</td>
//       <td>{userData.email}</td>
//     </tr>
//   );
// };

const Missing = () => {
  let [title, setTitle] = useState(['Missing 1', 'Missing 2', 'Missing 3']);

  return (
    <div>
      <div className='list'>
        <h4>
          <span> ๐ด </span>
          {title[0]}{' '}
        </h4>
        <p>Class : Backpack</p>
        <p>Owner : #1</p>
        <p>Loss Time : 00:22</p>
      </div>
    </div>
  );

  // const users = [
  //   { email: '๊ฐ๋ฐฉ', name: 'ํ๊ธธ๋' },
  //   { email: '๋ชจ์', name: '์์ธ๋ฒ' },
  //   { email: 'ํธ๋ํฐ', name: '์ ์น๊ฑด' },
  //   { email: '์ง๊ฐ', name: '์ดํํธ' },
  // ]; // ์๋ฅผ๋ค์ด ์๋ฒ์์ ๋ฐ์ค์จ ๋ฐ์ดํฐ๋ผ๋ฉด

  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>์ด๋ฆ</th>
  //         <th>์์งํ</th>
  //       </tr>
  //     </thead>

  //     <tbody>
  //       {users.map((user) => (
  //         // mapํจ์๋ฅผ ์ด์ฉํ์ฌ ์ค๋ธ์ ํธ ํ๋ํ๋์ฉ ๊ฐ์ ธ์จ๋ค
  //         // User๋ ์์ ์ปดํฌ๋ํธ
  //         // userData๋ prop๋ก์จ ์์ํํ ๋ฐ์ดํฐ๋ฅผ ๋๊ฒจ์ค๋ค๋ ์๋ฏธ
  //         <User userData={user} />
  //       ))}
  //     </tbody>
  //   </table>
  // );
};

export default Missing;
