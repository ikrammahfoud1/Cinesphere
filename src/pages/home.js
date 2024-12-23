import { useEffect, useState } from "react";
import Autocomplete from "../components/autocomplete";
import Card from "../components/card";
import Loader from "../components/loader";
import Pagination from "../components/pagination";
import Slider from "../components/slider";
import YearPicker from "../components/yearPicker";
import { useMovies } from "../hooks/useMovies";
import { usePerson } from "../hooks/usePerson";
import { useTrending } from "../hooks/useTrending";
import React from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("");
  const [type, setType] = useState("name");

  const { isFetching, data, isError } = useMovies(
    search,
    page,
    selectedYear,
    type
  );
  const {
    data: sildes,
    isFetching: isSlidesFetching,
    isError: isSlidesError,
  } = useTrending();
  const [personSearch, setPersonSearch] = useState("");
  const { data: persons } = usePerson(personSearch);

  useEffect(() => {
    setPage(1);
    if (!search) setSelectedYear("");
  }, [type, search, selectedYear]);

  useEffect(() => {
    setSearch("");
    setPersonSearch("");
  }, [type]);
  return (
    <>
      <Loader isError={isSlidesError} isFetching={isSlidesFetching}>
        <Slider slides={sildes?.data?.results?.slice(0, 5)} />
      </Loader>
      <div className="min-h-screen py-8 px-4 gap-2 ">
        {/* Search Bar */}

        <div className="max-w-lg mx-auto mb-8 flex flex-col gap-3">
          {type === "name" ? (
            <>
              <div className="relative flex ">
                <select
                  value={type}
                  id="example"
                  class="w-36 py-2 px-4 bg-white text-gray-800 rounded-tl-lg rounded-bl-lg focus:outline-none border-r-2 border-black "
                  onChange={(event) => setType(event.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="actor">Actor</option>
                </select>
                <input
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  value={search}
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 px-4 bg-white text-gray-800  rounded-tr-lg rounded-br-lg focus:outline-none "
                />
                {/* Loop icon (search icon) on the left inside the input */}
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

              {search && type === "name" && (
                <YearPicker
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                />
              )}
            </>
          ) : (
            <Autocomplete
              type={type}
              setType={setType}
              setSearch={setPersonSearch}
              data={persons?.data?.results}
              setSelected={setSearch}
              search={personSearch}
            />
          )}
        </div>

        <Loader isError={isError} isFetching={isFetching}>
          {data?.data?.[type === "actor" && search ? "cast" : "results"]
            ?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8">
                {data?.data?.[
                  type === "actor" && search ? "cast" : "results"
                ]?.map((props) => (
                  <Card key={props.id} {...props} />
                ))}
              </div>
              <Pagination
                currentPage={page}
                onPageChange={setPage}
                totalPages={data?.data?.total_pages}
              />
            </>
          ) : (
            <span class="text-white text-4xl">No item Found</span>
          )}
        </Loader>
      </div>
    </>
  );
};

export default Home;
