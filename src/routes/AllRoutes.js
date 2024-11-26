import { Routes,Route } from "react-router-dom";
import { MovieList,MovieDetails } from "../pages";


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetails />} /> 
    </Routes>
    </>
  )
}
