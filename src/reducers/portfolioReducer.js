const INITIAL_STATE = {
  portfolio: {},
  error: false,
  loading: false,
};

function portfolioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        ...state,
        portfolio: [...state.portfolio, action.stock],
      };

    case 'DATA_STOCK_REQUEST':
      return {
        ...state,
        error: false,
        loading: true,
      };

    case 'DATA_STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  quantity: action.quantity,
                  value: action.price * action.quantity,
                  dividends: action.dividends,
                }
              : item
        ),
        loading: false,
      };

    case 'DATA_STOCK_REQUEST_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}

export default portfolioReducer;
