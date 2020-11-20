import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, Toolbar, Typography } from "@material-ui/core";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <AppBar className={styles.color}>
        <Toolbar>
          <Typography variant="h5" style={{ flex: 1 }}>
            Election Polling Station
          </Typography>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="default">
              Admin
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
