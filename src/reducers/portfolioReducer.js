const INITIAL_STATE = {
  portfolio: [],
};

function portfolioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DATA_STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        portfolio: [...state.portfolio, action.stock],
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
      };

    case 'UPDATE_PORTFOLIO_SUCCESS':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  price: action.price,
                  value: action.price * item.quantity,
                }
              : item
        ),
      };

    case 'DELETE_STOCK':
      return {
        ...state,
        portfolio: state.portfolio.filter(item => action.api_id !== item.api_id),
      };

    case 'DELETE_DIVIDEND':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  dividends: item.dividends.filter(item => action.exDate !== item.exDate),
                }
              : item
        ),
      };
    case 'ADD_DIVIDEND':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  dividends: [...item.dividends, action.newDividend],
                }
              : item
        ),
      };
    case 'EDIT_DIVIDEND':
      return {
        ...state,
        portfolio: state.portfolio.map(
          item =>
            item.api_id === action.api_id
              ? {
                  ...item,
                  dividends: item.dividends.map(
                    item =>
                      item.exDate === action.exDate
                        ? {
                            ...item,
                            amountPerShare: action.amount,
                          }
                        : item
                  ),
                }
              : item
        ),
      };

    default:
      return state;
  }
}

export default portfolioReducer;
