import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const Popular = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=24b374ad25475d71714256d730de98a7"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovies();
  });

  function tronquerChaine(chaine, longueur) {
    return chaine.length > longueur
      ? chaine.slice(0, longueur) + "..."
      : chaine;
  }
  return (
    <>
          <section className="bg-rouge-3 sm:px-16">
            <h1 className=" mx-4 pt-4 sm:pt-8 pb-2 text-2xl max-sm:text-center sm:text-5xl font-bold text-white">Our Popular Movies</h1>
            <hr className="mx-4 h-2 border sm:mb-8" />
    
            <div className="flex flex-wrap justify-around px-4 sm:px-14">
              {movieList.map((movie) => (
                <>
                  <div class="max-w-sm border my-4 rounded-lg shadow bg-gray-800 border-gray-700">
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        class="rounded-t-lg"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                      />
                    </Link>
    
                    <div class="p-5">
                      <Link to={`/movie/${movie.id}`}>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                          {movie.title}
                        </h5>
                      </Link>
                      <p class="mb-3 font-normal text-gray-400">
                        {tronquerChaine(movie.overview, 100)}
                      </p>
                      <Link
                        to={`/movie/${movie.id}`}
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rouge-1 rounded-lg hover:bg-rouge-2 focus:ring-4 focus:outline-none focus:ring-rouge-2 "
                      >
                        Read more
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </section>
        </>
  );
};
