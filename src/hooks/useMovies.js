import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useMovies = (keyWords, page, selectedYear, person) => {
  const queryFn = ({ queryKey }) => {
    const [, query, page, primary_release_year, person] = queryKey;
    return axiosInstance.get(
      person
        ? `person/${person}/movie_credits`
        : query || primary_release_year
        ? `search/movie`
        : "/discover/movie",
      {
        params: {
          page,
          query,
          include_adult: "false",
          language: "en-US",
          primary_release_year,
        },
      }
    );
  };
  return useQuery({
    queryKey: ["movies", keyWords, page, selectedYear, person],
    queryFn,
  });
};
