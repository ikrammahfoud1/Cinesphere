import React from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';

const TopRated = () => {
  const { movies, loading } = useMovies('/movie/top_rated');

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TopRated;
