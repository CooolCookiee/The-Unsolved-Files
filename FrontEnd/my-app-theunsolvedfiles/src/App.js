import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import { saveToken, getToken, removeToken } from './auth';
import GeminiLogin from './components/GeminiLogin';
import HomePage from './components/HomePage';
import MidjourneyLogin from './components/MidjourneyLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/gemini" element={<GeminiLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;