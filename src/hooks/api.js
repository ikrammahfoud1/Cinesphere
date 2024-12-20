import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useExampleApiHook = (search) => {
  const queryFn = () => {
    return axiosInstance.get(`example.php?s=${search}`);
  };

  return useQuery({
    queryKey: ["example", search],
    queryFn,
  });
};
