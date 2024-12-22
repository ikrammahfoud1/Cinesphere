import React from "react";
import { useParams } from "react-router-dom";
import useMoviesWithDetails from "../hooks/useMoviesWithDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { details, video, creators, actors, movieLoading, movieError } =
    useMoviesWithDetails(id);

  if (movieLoading)
    return <div className="text-white text-3xl text-center">Loading...</div>;
  if (movieError)
    return (
      <div className="text-red-500 text-xl text-center">
        Error: {movieError}
      </div>
    );

  const posterImageUrl = details?.poster_path
    ? `https://image.tmdb.org/t/p/w500${details?.poster_path}`
    : "/path/to/default-image.jpg";

  const getImageUrl = (path) => {
    return path
      ? `https://image.tmdb.org/t/p/w200${path}`
      : "/path/to/default-profile-image.jpg";
  };

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Parallax background with blur effect */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-fixed bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${posterImageUrl})`,
          filter: "blur(8px)",
        }}
      ></div>

      <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
        {/* Section d'image avec effet de zoom */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-12 md:mb-24">
          <div className="relative w-full md:w-1/3 overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
            <img
              className="w-full h-96 object-cover object-center rounded-xl shadow-2xl transition-transform duration-500"
              src={posterImageUrl}
              alt={details?.title || details?.name}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Section des détails du film */}
          <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left">
            <h1 className="text-5xl text-red-600 font-extrabold mb-6 tracking-wide uppercase transform transition-all duration-500 hover:scale-105">
              {details?.title || details?.name}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300 opacity-90 hover:opacity-100 transition-opacity">
              {details?.overview}
            </p>

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <p className="text-sm md:text-base text-gray-400">
                Release Date: {details?.release_date || details?.first_air_date}
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Rating: {details?.vote_average}
              </p>
            </div>
          </div>
        </div>

        {/* Section des créateurs et acteurs */}
        <div className="flex flex-col md:flex-row gap-2">
          {/* Section des créateurs (réalisateurs) */}
          {creators.length > 0 && (
            <div className="w-full md:w-1/2 mt-4 mb-12">
              <h2 className="text-3xl text-gray-200 font-semibold mb-4">
                Directed by:
              </h2>
              <div className="flex flex-wrap gap-4 justify-start">
                {creators.map((creator) => (
                  <a
                    key={creator.id}
                    href={`https://www.themoviedb.org/person/${creator.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative mb-4">
                      <img
                        src={getImageUrl(creator.profile_path)}
                        alt={creator.name}
                        className="w-20 h-20 object-cover rounded-full mb-2 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-40 rounded-full group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    <p className="text-sm text-white">{creator.name}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Section des acteurs */}
          {actors.length > 0 && (
            <div className="w-full md:w-1/2 mt-4 mb-12">
              <h2 className="text-3xl text-gray-200 font-semibold mb-4">
                Cast:
              </h2>
              <div className="flex flex-wrap gap-4 justify-start">
                {actors.map((actor) => (
                  <a
                    key={actor.id}
                    href={`https://www.themoviedb.org/person/${actor.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative mb-4">
                      <img
                        src={getImageUrl(actor.profile_path)}
                        alt={actor.name}
                        className="w-20 h-20 object-cover rounded-full mb-2 shadow-xl group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-40 rounded-full group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    <p className="text-sm text-white">{actor.name}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section Vidéo (Trailer) avec effet d'agrandissement */}
      {video && (
        <div className="mt-12 transform transition-all duration-500 flex items-center justify-center  w-full p-6">
          <iframe
            height="500"
            width={"1000"}
            src={`https://www.youtube.com/embed/${video?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl shadow-2xl"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
