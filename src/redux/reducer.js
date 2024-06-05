const initialState = {
  activeComponent: 'Home'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_COMPONENT':
      return {
        ...state,
        activeComponent: action.payload
      };
    default:
      return state;
  }
};

export default reducer;