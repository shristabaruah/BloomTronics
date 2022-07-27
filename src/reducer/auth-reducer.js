const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    case "CHECK_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user,
      };
    default:
      return state;
  }
};
export { authReducer };
