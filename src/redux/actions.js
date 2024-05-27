export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  payload: movies,
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  payload: movie,
});

export const removeFavorite = (movie) => ({
  type: 'REMOVE_FAVORITE',
  payload: movie,
});
