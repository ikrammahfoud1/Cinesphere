import React, { useState } from "react";

const Autocomplete = ({
  setSearch,
  data = [],
  setSelected,
  search,
  setType,
  type,
}) => {
  // State to hold the input value
  const [isDropDowVisible, setIsDropdownVisible] = useState(false);
  // Function to handle input changes
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setSelected("");
    setSearch(userInput);
    setIsDropdownVisible(userInput !== "");
  };

  // Function to handle selecting a search from the list
  const handleSearchSelect = ({ id, name }) => {
    setSelected(id);
    setSearch(name);
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative flex ">
      <select
        value={type}
        id="example"
        class="w-36 py-2 px-4 bg-white text-gray-800 rounded-tl-lg rounded-bl-lg focus:outline-none border-r-2 border-black"
        onChange={(event) => setType(event.target.value)}
      >
        <option value="name">Name</option>
        <option value="actor">Actor</option>
      </select>
      <input
        id="autocomplete"
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search"
        className="w-full py-2 px-4 bg-white text-gray-800 rounded-tr-lg rounded-br-lg focus:outline-none "
        autoComplete="off"
      />

      {/* Autocomplete dropdown */}
      {isDropDowVisible && data.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 top-[40px]">
          {data.map((search, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-800 cursor-pointer hover:bg-[#B3261E] hover:text-white"
              onClick={() =>
                handleSearchSelect({ id: search.id, name: search.name })
              }
            >
              {search.name}
            </li>
          ))}
        </ul>
      )}
      <span className=" rounded-tr-lg rounded-br-lg flex justify-center items-center absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-xl bg-[#B3261E] h-[40px] w-[40px]  ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
            fill="#F7F9FC"
          />
        </svg>
      </span>
    </div>
  );
};

export default Autocomplete;
