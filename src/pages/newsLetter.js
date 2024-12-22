import React, { useMemo, useState } from "react";
import { useTrending } from "../hooks/useTrending";
import certificat from "../assets/certificat.jpg";
import Loader from "../components/loader";

const NewsletterForm = () => {
  const { data, isFetching, isError } = useTrending();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteCategory, setFavoriteCategory] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "email") setEmail(value);
    if (name === "favoriteCategory") setFavoriteCategory(value);
    setIsValid(true); // Reset validity when user types
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setIsSubmitted(true); // Simulate a successful submission
    } else {
      setIsValid(false);
    }
  };
  const randomNumber = useMemo(() => Math.floor(Math.random() * 20), []);
  return (
    <Loader isFetching={isFetching} isError={isError}>
      <div
        className="min-h-[80vh] p-6"
        style={{
          backgroundImage: `url(${
            data?.data?.results?.[randomNumber]?.backdrop_path
              ? `https://image.tmdb.org/t/p/original${data?.data?.results?.[randomNumber]?.backdrop_path}`
              : certificat
          })`, // Set background image from imported asset
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-lg ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h2>

          {isSubmitted ? (
            <div className="text-center text-green-600">
              <p>Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleFieldChange}
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleFieldChange}
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleFieldChange}
                  placeholder="Enter your email"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isValid ? "border-gray-300" : "border-red-500"
                  }`}
                />
                {!isValid && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {/* Favorite Movie Category */}
              <div>
                <label
                  htmlFor="favoriteCategory"
                  className="block text-gray-700 font-medium"
                >
                  Favorite Movie Category
                </label>
                <select
                  id="favoriteCategory"
                  name="favoriteCategory"
                  value={favoriteCategory}
                  onChange={handleFieldChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#B3261E] text-white rounded-lg hover:bg-[#7A4F5D] focus:outline-none focus:ring-2 focus:ring-[#633B48]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>
      </div>{" "}
    </Loader>
  );
};

export default NewsletterForm;
