import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import TopRated from "./pages/Toprated"; // Vérifiez le chemin d'importation
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TopRated />} />
        <Route path="toprated" element={<TopRated />} /> 
        <Route path="movie/:id" element={<MovieDetails />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
