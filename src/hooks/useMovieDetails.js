import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieDetails = (id) => {
  const [details, setDetails] = useState(null);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=bec16fabc0744debd9b0a4735f4f414e&language=en-US`
        );
        setDetails(response.data);
        
        // Récupérer les vidéos associées (ex: bandes-annonces)
        const videoResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=bec16fabc0744debd9b0a4735f4f414e&language=en-US`
        );
        setVideo(videoResponse.data.results[0]); // Nous récupérons la première vidéo
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return { details, video, loading, error };
};

export default useMovieDetails;
