import { useState, useEffect } from 'react';
import axiosInstance from '../axios'; // ou axios selon ta préférence

const useMoviesWithDetails = (id = null) => {
  const [movies, setMovies] = useState([]); // Pour la liste des films
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [details, setDetails] = useState(null); // Détails d'un film spécifique
  const [video, setVideo] = useState(null); // Vidéo du film
  const [movieLoading, setMovieLoading] = useState(true); // Indicateur de chargement des détails du film
  const [movieError, setMovieError] = useState(null); // Erreur lors de la récupération des détails

  useEffect(() => {
    // Charger les films top-rated
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/top_rated');
        setMovies(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Si un id est passé, récupérer les détails et la vidéo
    if (id) {
      const fetchMovieDetails = async () => {
        setMovieLoading(true);
        try {
          const detailsResponse = await axiosInstance.get(`/movie/${id}`);
          setDetails(detailsResponse.data);

          const videoResponse = await axiosInstance.get(`/movie/${id}/videos`);
          setVideo(videoResponse.data.results[0]); // Récupérer la première vidéo (trailer)
        } catch (err) {
          setMovieError(err.message);
        } finally {
          setMovieLoading(false);
        }
      };

      fetchMovieDetails();
    }
  }, [id]);

  return { 
    movies, loading, error, 
    details, video, movieLoading, movieError 
  };
};

export default useMoviesWithDetails;
