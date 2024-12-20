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
  const [creators, setCreators] = useState([]); // Stocker les auteurs/créateurs
  const [actors, setActors] = useState([]); // Liste des acteurs

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

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        setMovieLoading(true);
        try {
          const detailsResponse = await axiosInstance.get(`/movie/${id}`, {
            params: {
              append_to_response: 'videos,credits', // Ajouter les vidéos et les crédits dans la réponse
            },
          });
          setDetails(detailsResponse.data);

          const videoResponse = detailsResponse.data.videos.results[0]; // Premier trailer
          setVideo(videoResponse); // Stocker la vidéo

          const creatorsResponse = detailsResponse.data.credits.crew; // Crédits (auteurs/créateurs)
          const movieCreators = creatorsResponse.filter((member) => member.job === 'Director'); // Filtrer par réalisateur
          setCreators(movieCreators);

          const actorsResponse = detailsResponse.data.credits.cast; // Liste des acteurs
          setActors(actorsResponse.slice(0, 10)); // Limiter à 10 acteurs pour ne pas trop surcharger
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
    details, video, creators, actors, movieLoading, movieError 
  };
};

export default useMoviesWithDetails;
