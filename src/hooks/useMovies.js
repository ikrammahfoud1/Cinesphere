import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useMovies = (value, page, selectedYear, type) => {
  const queryFn = ({ queryKey }) => {
    const [, value, page, primary_release_year, type] = queryKey;
    return axiosInstance.get(
      value
        ? type === "actor"
          ? `person/${value}/movie_credits`
          : `search/movie`
        : "/discover/movie",
      {
        params: {
          page,
          include_adult: "false",
          language: "en-US",
          ...(type === "name" && { primary_release_year, query: value }),
        },
      }
    );
  };
  return useQuery({
    queryKey: ["movies", value, page, selectedYear, type],
    queryFn,
  });
};

export const useMovieById = (id) => {
  const queryFn = () => {
    return axiosInstance.get(`movie/${id}`, {
      params: {
        include_adult: "false",
        language: "en-US",
      },
    });
  };
  return useQuery({
    queryKey: ["movies_byid", id],
    queryFn,
  });
};
