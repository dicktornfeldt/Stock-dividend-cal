const INITIAL_STATE = {
  stockShort: '',
};

function stockReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NEW_STOCK_REQUEST_SUCCESS':
      return {
        ...state,
        stockShort: action.stock,
      };
    default:
      return state;
  }
}

export default stockReducer;
