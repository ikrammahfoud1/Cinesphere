import { useState, useEffect } from 'react';
import axiosInstance from '../axios';  // Importer l'instance d'axios

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/top_rated');  // Faire la requête pour les films "Top Rated"
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useMovies;
