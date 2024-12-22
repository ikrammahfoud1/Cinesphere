import React, { useEffect, useState } from "react";
import { tronquerChaine } from "../utils";
import certificat from "../assets/certificat.jpg";
import { Link } from "react-router";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the active slide

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides?.length); // Loop back to the first slide after the last one
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides?.length) % slides?.length // Loop to the last slide from the first one
    );
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto scroll every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Slider */}
      <div className="overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides?.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-[400px] flex items-center p-4 gap-8"
              style={{
                backgroundImage: `url(${
                  slide.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${slide.backdrop_path}`
                    : certificat
                })`, // Set background image from imported asset
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Left Side: Title and Description */}

              {/* Right Side: Image */}
              <div className="flex-1 h-full flex justify-center items-center ">
                <Link to={`/movie/${slide.id}`}>
                  <img
                    src={
                      slide.poster_path
                        ? `https://image.tmdb.org/t/p/w200${slide.poster_path}`
                        : "https://dummyimage.com/500x750/d4c9d4/424242.png&text=No+Photo"
                    }
                    alt={`Slide ${slide.id} Image`}
                    className="object-contain w-full h-auto rounded-lg shadow-lg max-w-[200px] max-h-[400px]  "
                  />
                </Link>
              </div>
              <div className="flex-1 text-white">
                <h2 className="text-3xl font-extrabold">{slide.title}</h2>
                <p className="mt-4 text-lg">
                  {tronquerChaine(slide.overview, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-[#B3261E] border-2 border-white scale-150"
                : "bg-white border-2 border-transparent scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
