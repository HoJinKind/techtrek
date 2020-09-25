import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== "") {
      console.log("123");
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <section className="container">
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form
          className="form"
          action="create-profile.html"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
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
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account?{" "}
          <Link Link to="./login">
            Sign In
          </Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Register;
