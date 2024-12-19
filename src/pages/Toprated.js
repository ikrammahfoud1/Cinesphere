import React from 'react';
import MovieCard from '../components/MovieCard';
import useMoviesWithDetails from '../hooks/useMoviesWithDetails';

const TopRated = () => {
  const { movies, loading, error } = useMoviesWithDetails();

  if (loading) return <div className="text-white text-3xl text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-xl text-center">Error: {error}</div>;

  return (
    <div className="bg-black min-h-screen p-8">
      {/* Titre principal */}
      <h1 className="text-5xl font-extrabold text-center mb-12 text-red-900 shadow-lg shadow-red-700/50 transition-transform duration-300 transform hover:scale-105">
        Top Rated Movies
      </h1>

      {/* Slider des cartes de films avec Tailwind */}
      <div className="flex overflow-x-auto space-x-6 py-4 px-2 ">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-64 "  // Suppression de l'effet de focus
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
