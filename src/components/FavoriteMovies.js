import React from 'react';
import { useSelector } from 'react-redux';
import './FavoriteMovies.css';

const FavoriteMovies = () => {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="favorite-movies">
      {favorites.map(movie => (
        <div key={movie.id} className="movie-card" onClick={() => window.open(movie.imdb_url, "_blank")}>
          <h2>{movie.movie}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;
