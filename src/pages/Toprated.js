import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const TopRated = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=24b374ad25475d71714256d730de98a7"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  function tronquerChaine(chaine, longueur) {
    return chaine.length > longueur ? chaine.slice(0, longueur) + "..." : chaine;
  }

  return (
    <section className="bg-rouge-3">
      {/* Titre de la section */}
      <div className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Cinesphere Top Rated Movies
        </h1>
      </div>

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-14">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="relative border rounded-lg shadow-lg bg-gray-800 border-gray-700"
          >
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
              {movie.vote_average.toFixed(1)}
            </div>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="rounded-t-lg transition duration-500 transform"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <div className="p-5">
              <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {movie.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-400">
                {tronquerChaine(movie.overview, 100)}
              </p>
              <Link
                to={`/movie/${movie.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rouge-1 rounded-lg hover:bg-rouge-2 focus:ring-4 focus:outline-none focus:ring-rouge-2 transition duration-300 ease-in-out"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
