import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Additional routes can be added here */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
