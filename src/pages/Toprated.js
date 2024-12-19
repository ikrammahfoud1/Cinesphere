import React from 'react';
import MovieCard from '../components/MovieCard';  // Importer le composant MovieCard
import UseMovies from '../hooks/UseMovies';  // Importer le hook renommé

const TopRated = () => {
  const { movies, loading, error } = UseMovies();  // Utiliser le hook pour récupérer les films "Top Rated"

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;
