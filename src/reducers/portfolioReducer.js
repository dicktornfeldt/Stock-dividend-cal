const INITIAL_STATE = {
  portfolio: [],
  error: false,
  loading: false,
};

function portfolioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DATA_STOCK_REQUEST':
      return {
        ...state,
        error: false,
        loading: true,
      };

    case 'DATA_STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        portfolio: [...state.portfolio, action.stock],
        loading: false,
      };

    case 'DATA_STOCK_REQUEST_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'EDIT_STOCK':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  quantity: action.quantity,
                  value: (item.value / item.quantity) * action.quantity,
                }
              : item
        ),
        loading: false,
      };

    case 'DELETE_STOCK':
      return {
        ...state,
        portfolio: state.portfolio.filter(item => action.api_id !== item.api_id),
      };

    default:
      return state;
  }
}

export default portfolioReducer;
