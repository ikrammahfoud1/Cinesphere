import React from "react";
import MovieCard from "../components/MovieCard";
import useMoviesWithDetails from "../hooks/useMoviesWithDetails";

const TopRated = () => {
  const { movies, loading, error } = useMoviesWithDetails();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-red-500 w-16 h-16 border-solid"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-xl text-center">Error: {error}</div>
    );

  return (
    <div className="bg-black min-h-screen p-8">
      {/* Titre principal avec effet de transition */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-red-900 transform transition-all duration-300 hover:scale-110">
        Top Rated Movies
      </h1>

      {/* Slider des cartes de films avec effets de zoom et rotation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-64 transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
