import { combineReducers } from 'redux';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(movie => movie.id !== action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});
