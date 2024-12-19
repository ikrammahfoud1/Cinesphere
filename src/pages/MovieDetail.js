import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios/index';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axiosInstance.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) return <div>Chargement...</div>;

  if (!movie) return <div>Film non trouvé</div>;

  return (
    <div className="p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
      <p className="text-gray-600">{movie.release_date}</p>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
