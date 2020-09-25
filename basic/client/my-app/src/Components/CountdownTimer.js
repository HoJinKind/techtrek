import React, {useState}from "react";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import jwt_decode from "jwt-decode";

const CountdownTimer = () => {
  const onSubmit = async (e) => {};
  var expiry = parseInt(localStorage.getItem("expiresIn"));
  const token = localStorage.getItem("token");
  var formatDate = new Date(expiry);

  const onExtend = async (e) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
    const res = await axios.get(
      'http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/extendSession',
      config
    ).catch(err => {
      window.alert('invalid jwt' + err)
    });
    console.log(res);
    if (res && res.status === 200) {
      localStorage.setItem("token", res.data);
      var decoded = jwt_decode(res.data);
      // var issuedTime = new Date( (decoded.iat * 1000));
      // var expTime = new Date(decoded.exp * 1000);
      localStorage.setItem("expiresIn", decoded.exp*1000);
      expiry = parseInt(localStorage.getItem("expiresIn"));
      formatDate = new Date(expiry);
      window.location.reload();
    } else {
    
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="container">
      <Paper variant="outlined">
        <div className="bg-light">
          <div>Session ends in: {formatDate.toLocaleString()}</div>
          <Button onClick={(e) => onExtend(e)}>Extend Session</Button>
        </div>
      </Paper>
    </div>
  );
};

export default CountdownTimer;
