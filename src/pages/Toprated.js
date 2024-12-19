import React from 'react';
import MovieCard from '../components/MovieCard';
import useMoviesWithDetails from '../hooks/useMoviesWithDetails';  // Importer le hook combiné

const TopRated = () => {
  const { movies, loading, error } = useMoviesWithDetails();  // Utiliser le hook combiné pour récupérer les films

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Top Rated Movies
      </h1>
      
      {/* Grille des cartes de films */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
