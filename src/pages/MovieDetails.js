import React from 'react';
import { useParams } from 'react-router-dom';
import useMoviesWithDetails from '../hooks/useMoviesWithDetails'; // Importer le hook combiné

const MovieDetails = () => {
  const { id } = useParams();  // Récupérer l'ID du film depuis l'URL
  const { details, video, movieLoading, movieError } = useMoviesWithDetails(id);  // Utiliser le hook pour récupérer les détails du film

  if (movieLoading) return <div>Loading...</div>;
  if (movieError) return <div>Error: {movieError}</div>;

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <h1 className="text-4xl font-semibold mb-8">{details?.title || details?.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            className="w-full h-auto rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt={details?.title || details?.name}
          />
        </div>
        <div className="w-full md:w-2/3 ml-0 md:ml-8">
          <p className="text-lg mb-4">{details?.overview}</p>
          <p className="text-sm text-gray-400">Release Date: {details?.release_date || details?.first_air_date}</p>
          <p className="text-sm text-gray-400">Rating: {details?.vote_average}</p>

          {video && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Trailer:</h2>
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
      </div>
    </div>
  );
};

export default MovieDetails;
