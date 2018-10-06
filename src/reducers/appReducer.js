const INITIAL_STATE = {
  error: false,
  loading: false,
  modalactive: false,
  modaldata: {
    name: '',
    dividends: '',
    api_id: '',
    currency_multiply: '',
  },
};

function appReducer(state = INITIAL_STATE, action) {
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
        loading: false,
      };

    case 'DATA_STOCK_REQUEST_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'UPDATE_PORTFOLIO_REQUEST':
      return {
        ...state,
        error: false,
        loading: true,
      };

    case 'UPDATE_PORTFOLIO_SUCCESS':
      return {
        ...state,
        loading: false,
      };

    case 'UPDATE_PORTFOLIO_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };

    case 'EDIT_STOCK_MODAL':
      return {
        ...state,
        modalactive: true,
        modaldata: {
          name: action.name,
          dividends: action.dividends,
          api_id: action.api_id,
          currency_multiply: action.currency_multiply,
        },
      };

    case 'DELETE_DIVIDEND':
      return {
        ...state,
        modaldata: {
          ...state.modaldata,
          dividends: state.modaldata.dividends.filter(item => action.exDate !== item.exDate),
        },
      };

    case 'CLOSE_STOCK_MODAL':
      return {
        ...state,
        modalactive: false,
        modaldata: {
          name: '',
          dividends: '',
          api_id: '',
          currency_multiply: '',
        },
      };

    default:
      return state;
  }
}

export default appReducer;
