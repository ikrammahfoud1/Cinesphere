import { useState, useEffect } from 'react';
import axiosInstance from '../axios'; // ou axios selon ta préférence

const useMoviesWithDetails = (id = null) => {
  const [movies, setMovies] = useState([]); // Liste des films
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [details, setDetails] = useState(null); // Détails du film spécifique
  const [video, setVideo] = useState(null); // Vidéo du film
  const [movieLoading, setMovieLoading] = useState(true); // Indicateur de chargement des détails du film
  const [movieError, setMovieError] = useState(null); // Erreur lors de la récupération des détails

  // Récupérer les films populaires
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/top_rated', {
          params: {
            page: 1,
          },
        });
        setMovies(response.data.results.slice(0, 12)); // Limiter à 12 films
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Récupérer les détails d'un film et la vidéo associée
  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        setMovieLoading(true);
        try {
          const detailsResponse = await axiosInstance.get(`/movie/${id}`, {
            params: {
              append_to_response: 'videos', // Ajouter la vidéo dans la réponse
            },
          });
          setDetails(detailsResponse.data);

          const videoResponse = detailsResponse.data.videos.results[0]; // Premier trailer
          setVideo(videoResponse); // Stocker la vidéo
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
