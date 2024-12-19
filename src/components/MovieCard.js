import React from 'react';
import { Link } from 'react-router-dom'; // Importer le Link de react-router-dom

const MovieCard = ({ movie }) => {
  const rating = movie.vote_average.toFixed(1); // Formater le rating pour n'afficher qu'un seul chiffre après la virgule

  return (
    <Link to={`/movie/${movie.id}`} className="group max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl relative">
      <div className="relative">
        {/* Rating en haut à gauche avec fond jaune */}
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md z-10">
          {rating}
        </div>

        {/* Image du film */}
        <img
          className="w-full h-72 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      {/* Contenu du film */}
      <div className="px-6 py-4 group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-300">
        <div className="font-bold text-xl mb-2 text-gray-200 transition-all duration-300 group-hover:text-yellow-400">
          {movie.title}
        </div>
        <p className="text-gray-300 text-base line-clamp-3 group-hover:text-white transition-all duration-300">
          {movie.overview}
        </p>
      </div>

      {/* Effet de survol : Fond de couleur semi-transparent */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default MovieCard;
