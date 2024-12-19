import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importer les composants de react-router-dom
import TopRated from './pages/Toprated';  // Importer la page TopRated

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<TopRated />} />  {/* Définir la route pour la page TopRated */}
          {/* Tu peux ajouter d'autres routes pour d'autres pages si besoin */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
