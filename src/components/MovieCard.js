import React from 'react';
import { Link } from 'react-router-dom'; // Importer le Link de react-router-dom

const MovieCard = ({ movie }) => {
  const rating = movie.vote_average.toFixed(1); // Formater le rating pour n'afficher qu'un seul chiffre après la virgule

  return (
    <Link to={`/movie/${movie.id}`} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        {/* Rating en haut à gauche avec fond jaune */}
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {rating}
        </div>
        
        {/* Image du film */}
        <img
          className="w-full h-72 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      {/* Contenu du film */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-200">{movie.title}</div>
        <p className="text-gray-300 text-base line-clamp-3">{movie.overview}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
