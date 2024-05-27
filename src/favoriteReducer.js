const initialState = [];

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(movie => movie.id !== action.payload.id);
    default:
      return state;
  }
};
