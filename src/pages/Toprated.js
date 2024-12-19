import React from 'react';
import MovieCard from '../components/MovieCard';
import useMoviesWithDetails from '../hooks/useMoviesWithDetails';

const TopRated = () => {
  const { movies, loading, error } = useMoviesWithDetails();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-black min-h-screen p-4">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-center mb-20 text-red-900 shadow-lg shadow-red-700/50">
          Top Rated Movies
      </h1>
      
      {/* Grille des cartes de films */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
