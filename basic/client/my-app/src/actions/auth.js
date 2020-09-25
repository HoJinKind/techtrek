import axios from "axios";
import { setAlert } from "./alert";

import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { browserHistory } from "react-router";

export const login = ({ username, password }) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ username, password });
    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert("Logged In ", "success"));
    // browserHistory.push("/home");
    // this.context.history.push("/home");
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
