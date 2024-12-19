import React from 'react';
import { useParams } from 'react-router-dom';  
import useMoviesWithDetails from '../hooks/useMoviesWithDetails'; 

const MovieDetails = () => {
  const { id } = useParams();  
  const { details, video, movieLoading, movieError } = useMoviesWithDetails(id); 

  if (movieLoading) return <div className="text-white text-3xl text-center">Loading...</div>;
  if (movieError) return <div className="text-red-500 text-xl text-center">Error: {movieError}</div>;
  const posterImageUrl = details?.poster_path
    ? `https://image.tmdb.org/t/p/w500${details?.poster_path}`
    : '/path/to/default-image.jpg'; 

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-5xl text-red-900 font-extrabold text-center mb-12 transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-red-700/50">
        {details?.title || details?.name}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Section Image avec hauteur personnalisée */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 transition-transform duration-300 transform hover:scale-105">
          <img
            className="w-full h-96 object-cover object-top rounded-lg shadow-2xl shadow-black/50"
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt={details?.title || details?.name}
          />
        </div>


        {/* Section Détails du film centrée avec description plus longue */}
        <div className="w-full md:w-1/2 ml-0 md:ml-8 flex flex-col justify-center">
          <p className="text-lg mb-6">{details?.overview}</p>
          <p className="text-sm text-gray-400">Release Date: {details?.release_date || details?.first_air_date}</p>
          <p className="text-sm text-gray-400 mb-4">Rating: {details?.vote_average}</p>
        </div>
      </div>

      {/* Section vidéo (Trailer) sans titre ni ombre */}
      {video && (
        <div className="mt-8">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
