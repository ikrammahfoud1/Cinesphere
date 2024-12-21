import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificat from "../assets/certificat.jpg";

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
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  function tronquerChaine(chaine, longueur) {
    return chaine.length > longueur
      ? chaine.slice(0, longueur) + "..."
      : chaine;
  }

  return (
    <>
      <section className="bg-rouge-3">
        {/* Hero Section */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {movieList.map((movie) => (
              <div
                key={movie.id}
                className="relative w-full h-96 sm:h-96 overflow-hidden"
              >
                <img
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                      : certificat
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute felx flex-col inset-0 bg-black bg-opacity-50 flex items-start content-start justify-center px-4 sm:pl-16">
                  <h1 className="text-3xl text-white">
                    Cinesphere Popular Movies
                  </h1>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white max-sm:backdrop-blur-md py-2 rounded-md">
                    {movie.title}
                  </h2>
                  <Link
                    to={`/movie/${movie.id}`}
                    className="inline-flex items-center mt-4 px-3 py-2 text-sm font-medium text-center text-white bg-rouge-1 rounded-lg hover:bg-rouge-2 focus:ring-4 focus:outline-none focus:ring-rouge-2"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"
                      />
                    </svg>
                    <span className="font-semibold">Watch movie</span>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Movie List */}

        <div className="flex flex-wrap justify-around px-4 sm:px-14">
          {movieList.map((movie) => (
            <div
              key={movie.id}
              className="max-w-sm border my-4 rounded-lg shadow bg-gray-800 border-gray-700"
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="rounded-t-lg"
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
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rouge-1 rounded-lg hover:bg-rouge-2 focus:ring-4 focus:outline-none focus:ring-rouge-2"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
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
    </>
  );
};
