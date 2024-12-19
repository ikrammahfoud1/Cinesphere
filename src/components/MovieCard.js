import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Utilisation de l'URL de l'image fournie par l'API
        alt={movie.title}
        className="w-full h-72 object-cover rounded-md"
      />
      <h2 className="mt-2 text-xl font-semibold">{movie.title}</h2>
      <p className="text-sm">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
