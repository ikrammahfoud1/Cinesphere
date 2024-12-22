import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const usePerson = (query) => {
  const queryFn = ({ queryKey }) => {
    const [, query] = queryKey;
    return axiosInstance.get("search/person", {
      params: {
        language: "en-US",
        query,
      },
    });
  };
  return useQuery({
    queryKey: ["person", query],
    queryFn,
  });
};
