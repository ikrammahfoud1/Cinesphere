import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useMovies = (keyWords, page, selectedYear) => {
  const queryFn = ({ queryKey }) => {
    const [, query, page, primary_release_year] = queryKey;
    return axiosInstance.get(
      query || primary_release_year ? `search/movie` : "/discover/movie",
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
    queryKey: ["movies", keyWords, page, selectedYear],
    queryFn,
  });
};
