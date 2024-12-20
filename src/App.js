import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import TopRated from "./pages/Toprated"; 
import MovieDetails from "./pages/MovieDetails";

import { Upcoming } from "./pages/Upcoming";
import { Popular } from "./pages/Popular";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route path="toprated" element={<TopRated />} />
        <Route path="movie/:id" element={<MovieDetails />} />

        <Route path="movies/popular" element={<Popular />} />
        <Route path="movies/upcoming" element={<Upcoming />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
