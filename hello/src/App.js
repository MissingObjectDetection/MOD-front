// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Input2 from './pages/Input2';
import List from './pages/List';

function App() {
  let [글제목, 글제목변경] = useState(['리스트1', '리스트2', '리스트3']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> |{' '}
        <Link to='/counter'>Counter</Link> | <Link to='/input'>Input</Link> |{' '}
        <Link to='/input2'>Input2</Link> | <Link to='/list'>server List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/input' element={<Input />} />
        <Route path='/input2' element={<Input2 />} />
        <Route path='/list' element={<List />} />
      </Routes>

      <div className='black-nav'>
        <h4>ReactSite</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '새로운 리스트';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className='list'>
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          {글제목[1]} <span>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>
          {글제목[2]} <span>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='model'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
