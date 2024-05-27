const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
