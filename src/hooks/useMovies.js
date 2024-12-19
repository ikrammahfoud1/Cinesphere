import { useState, useEffect } from 'react';
import axiosInstance from '../axios/index';

const useMovies = (endpoint) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(endpoint);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return { movies, loading };
};

export default useMovies;
