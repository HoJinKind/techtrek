import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
  username: localStorage.getItem("username"),
  loading: true,
  isAuthenticated: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("username", payload.username);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
      localStorage.removeItem("username");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
