import React, { Fragment, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { login } from "../actions/auth";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import moment from "moment";

const Login = (props) => {
  const [showError, setShowError] = useState(false);

  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== "") {
      console.log(formData);
    }
    const user = {
      username,
      password,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(user);
      const res = await axios.post(
        'http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login',
        body,
        config
      ).catch(err => {
        window.alert('invalid login' + err)
      });
      console.log(res);
      if (res && res.status === 200) {
        localStorage.setItem("token", res.data);
        var decoded = jwt_decode(res.data);
        // var issuedTime = new Date( (decoded.iat * 1000));
        // var expTime = new Date(decoded.exp * 1000);
        localStorage.setItem("expiresIn", decoded.exp*1000);
        history.push({
          pathname: "/home",
          login: true,
          username: username.toLowerCase(),
        });
        setShowError(false);
      } else {
        setShowError(true);
      
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <section className="container">
        <div>
          {showError ? (
            <div className="alert alert-danger">Invalid credentials</div>
          ) : null}
        </div>

        <p className="lead">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </section>
    </Fragment>
  );
};

// Login.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
