const INITIAL_STATE = {
  error: false,
  loading: false,
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DATA_STOCK_REQUEST':
      return {
        error: false,
        loading: true,
      };

    case 'DATA_STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        loading: false,
      };

    case 'DATA_STOCK_REQUEST_FAILED':
      return {
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}

export default appReducer;
