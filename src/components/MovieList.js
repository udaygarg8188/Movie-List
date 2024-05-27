import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions';
import './MovieList.css';

const MovieList = () => {
  const movies = useSelector(state => state.movies);
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id);

  const handleFavorite = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card" onClick={() => window.open(movie.imdb_url, "_blank")}>
          <h2>{movie.movie}</h2>
          {/* <img src={movie.image}/> */}
          <p>Rating: {movie.rating}</p>
          <button onClick={(e) => { e.stopPropagation(); handleFavorite(movie); }}>
            {isFavorite(movie) ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
