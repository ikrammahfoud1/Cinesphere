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
    <div className="bg-gradient-to-r bg-black min-h-screen text-white p-10 md:p-16 flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-12 md:mb-24">
        {/* Section Image avec hauteur personnalisée et animation */}
        <div className="relative w-full md:w-1/3 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-6">
          <img
            className="w-full h-96 object-cover object-center rounded-lg shadow-lg"
            src={posterImageUrl}
            alt={details?.title || details?.name}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Section Détails du film avec mise en valeur */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl md:text-5xl text-red-900 font-bold mb-6 tracking-wide uppercase transform transition-all duration-500 hover:scale-110">
            {details?.title || details?.name}
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90 hover:opacity-100 transition-opacity">{details?.overview}</p>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <p className="text-sm md:text-base text-gray-400">Release Date: {details?.release_date || details?.first_air_date}</p>
            <p className="text-sm md:text-base text-gray-400">Rating: {details?.vote_average}</p>
          </div>
        </div>
      </div>

      {/* Section vidéo (Trailer) avec bordures arrondies et animation */}
      {video && (
        <div className="mt-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
