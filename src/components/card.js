import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tronquerChaine } from "../utils";
import WishList from "../context/wishlist";

const Card = ({ id, poster_path, title, overview, vote_average }) => {
  const { isLiked, handleWishListIconClick } = useContext(WishList);
  return (
    <div className="max-w-sm border my-4 rounded-lg shadow bg-gray-800 border-gray-700 h-full relative">
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg z-10">
        {vote_average.toFixed(1)}
      </div>
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
        <div className="flex items-center justify-between">
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

          <svg
            onClick={() => handleWishListIconClick(id)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="cursor-pointer"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isLiked(id) ? "red" : "white"}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
