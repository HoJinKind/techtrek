import React from "react";
import Button from "react-bootstrap/esm/Button";

import Paper from "@material-ui/core/Paper";

const CountdownTimer = () => {
  const onSubmit = async (e) => {};
  const expiry = localStorage.getItem("expiresIn");
  return (
    <div className="container">
      <Paper variant="outlined">
        <div className="bg-light">
          <div>expires in: {expiry}</div>
          <Button>Refresh</Button>
        </div>
      </Paper>
    </div>
  );
};

export default CountdownTimer;
