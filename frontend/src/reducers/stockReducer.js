const INITIAL_STATE = {
  stockShort: '',
};

function stockReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STOCK':
      return {
        ...state,
        stockShort: action.data,
      };
    default:
      return state;
  }
}

export default stockReducer;
