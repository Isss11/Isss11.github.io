import React from 'react';
import './App.css';
import Header from './components/Header.js';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/index';
import Resume from './pages/resume';
import WorkTermOne from './pages/workTermOne';
import WorkTermTwo from './pages/workTermTwo';
import WorkTermThree from './pages/workTermThree';
import Footer from './components/Footer';

function App() {
  return (
    // Routing for website, order of routing in this file does not determine link order.
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/co-op/s23WorkTerm" element={<WorkTermOne />} />
        <Route path="/co-op/f23WorkTerm" element={<WorkTermTwo />} />
        <Route path="/co-op/s24WorkTerm" element={<WorkTermThree />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
