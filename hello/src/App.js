// import logo from './logo.svg';

import './App.css';

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import People from './pages/People';
import Object from './pages/Object';
import Missing from './pages/Missing';
import VideoUpload from './pages/VideoUpload';
import VideoSend from './pages/VideoSend';
// import Counter from './pages/Counter';
// import Input from './pages/Input';
// import Input2 from './pages/Input2';

function App() {
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Missing Object Detection</h4>
      </div>
      <VideoSend />
      <VideoUpload />

      <nav>
        <Link to='/'>People</Link> | <Link to='/Object'>Object</Link> |{' '}
        <Link to='/Missing'>Missing</Link>
        {/* <Link to='/counter'>Counter</Link> | <Link to='/input'>Input</Link> |{' '}
        <Link to='/input2'>Input2</Link> | */}
      </nav>

      <Routes>
        <Route path='/' element={<People />} />
        <Route path='/Object' element={<Object />} />
        <Route path='/Missing' element={<Missing />} />
        {/* <Route path='/counter' element={<Counter />} />
        <Route path='/input' element={<Input />} />
        <Route path='/input2' element={<Input2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
