const INITIAL_STATE = {
  portfolio: {},
};

function portfolioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        portfolio: [...state.portfolio, action.stock],
      };
    default:
      return state;
  }
}

export default portfolioReducer;
