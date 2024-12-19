import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const rating = movie.vote_average.toFixed(1); // Formater le rating pour n'afficher qu'un seul chiffre après la virgule

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group max-w-xs rounded-md overflow-hidden shadow-md bg-black text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg relative"
    >
      <div className="relative">
        {/* Rating en haut à gauche avec fond rouge */}
        <div className="absolute top-2 left-2 bg-yellow-800 text-black px-2 py-1 rounded-full text-xs font-semibold shadow-md z-10">
          {rating}
        </div>

        {/* Image du film */}
        <div className="w-full h-56 bg-black flex items-center justify-center">
          <img
            className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      {/* Contenu du film */}
      <div className="px-4 py-3 group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-300">
        <div className="font-bold text-lg mb-1 text-gray-200 transition-all duration-300 group-hover:text-yellow-800">
          {movie.title}
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 group-hover:text-white transition-all duration-300">
          {movie.overview}
        </p>
      </div>

      {/* Effet de survol : Fond de couleur semi-transparent */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default MovieCard;
