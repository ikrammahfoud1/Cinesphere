import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useTrending = () => {
  const queryFn = () => {
    return axiosInstance.get("trending/movie/day", {
      params: {
        language: "en-US",
      },
    });
  };
  return useQuery({
    queryKey: ["trending"],
    queryFn,
  });
};
