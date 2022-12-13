// import logo from './logo.svg';

import './App.css';

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import People from './pages/People';
import Object from './pages/Object';
import Missing from './pages/Missing';
import VideoUpload from './pages/VideoUpload';
import VideoSend from './pages/VideoSend';

function App() {
  setTimeout(function () {
    alert('🔴🔔 : Missing Object was detected');
  }, 32000);
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Missing Object Detection</h4>
      </div>
      {/* <CSRFToken /> */}
      <VideoSend></VideoSend>
      {/* <VideoUpload /> */}

      <nav>
        <Link to='/People'>People</Link> | <Link to='/Object'>Object</Link> |{' '}
        <Link to='/Missing'>Missing</Link>
      </nav>

      <Routes>
        <Route path='/People' element={<People />} />
        <Route path='/Object' element={<Object />} />
        <Route path='/Missing' element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
