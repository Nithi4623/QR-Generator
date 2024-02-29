import React from 'react';
import './App.css'; // Import your CSS file if needed
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home1 from './app/component/home1';
import Home from './app/component/home';
import Home2 from './app/component/rough';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home2 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
