import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Map from './pages/Map';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
};

export default App;
