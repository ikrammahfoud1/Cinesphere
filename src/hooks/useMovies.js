import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useMovies = (keyWords, page) => {
  const queryFn = ({ queryKey }) => {
    const [, query, page] = queryKey;
    return axiosInstance.get(query ? `search/movie` : "/discover/movie", {
      params: {
        page,
        query,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
    });
  };
  return useQuery({
    queryKey: ["movies", keyWords, page],
    queryFn,
  });
};
