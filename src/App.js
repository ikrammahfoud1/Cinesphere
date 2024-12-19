import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Toprated from './pages/Toprated';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Toprated />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;