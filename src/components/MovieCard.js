import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
        <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">
          Voir détails
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
