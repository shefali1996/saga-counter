const initialState = {
  age: 20
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_AGE_UP_SYNC":
      return {
        ...state,
        age: state.age+1
      };
    case "ON_AGE_DOWN":
      return {
        ...state,
        age: state.age-1
      };
    default:
  }

  return state;
};

export default Reducer;
