import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "bec16fabc0744debd9b0a4735f4f414e",
  },
});

export default axiosInstance;
