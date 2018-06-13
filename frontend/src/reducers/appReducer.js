const INITIAL_STATE = {
  showAddTodo: false,
};

const appReducer = (state = INITIAL_STATE, type) => {
  switch (type) {
    case 'TOGGLE_ADD_TODO':
      return {
        ...state,
        showAddTodo: !state.showAddTodo,
      };
    default:
      return state;
  }
};

export default appReducer;
