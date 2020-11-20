import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "10%",
  },
});
export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
    Axios.get(
      `http://localhost:5000/user/login?email=${email}&password=${password}`
    )
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className={classes.root}>
        <Typography variant="h3">Login</Typography>
        <br />
        <br />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          required
        />
        <br />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={handleLogin}>
          Login
        </Button>
      </form>
      {auth ? { message } : <Redirect to="/" />}
      <br />
      <Link to="/register">wanna register</Link>
    </>
  );
}
