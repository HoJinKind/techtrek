import React from "react";
import Button from "react-bootstrap/esm/Button";

import Paper from "@material-ui/core/Paper";

const CountdownTimer = () => {
  const onSubmit = async (e) => {};
  const expiry = parseInt(localStorage.getItem("expiresIn"));
  const formatDate = new Date(expiry);
  return (
    <div className="container">
      <Paper variant="outlined">
        <div className="bg-light">
          <div>Session ends in: {formatDate.toLocaleString()}</div>
          <Button>Extend Session</Button>
        </div>
      </Paper>
    </div>
  );
};

export default CountdownTimer;
