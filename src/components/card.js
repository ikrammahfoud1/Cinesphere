import React from "react";
import { Link } from "react-router-dom";
import { tronquerChaine } from "../utils";

const Card = ({ id, poster_path, title, overview }) => {
  return (
    <div className="max-w-sm border my-4 rounded-lg shadow bg-gray-800 border-gray-700 h-full">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg  object-cover"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://dummyimage.com/500x750/d4c9d4/424242.png&text=No+Photo"
          }
          alt={title}
        />
      </Link>
      <div className="p-5 ">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-400">
          {tronquerChaine(overview, 100)}
        </p>
        <Link
          to={`/movie/${id}`}
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
  );
};

export default Card;
