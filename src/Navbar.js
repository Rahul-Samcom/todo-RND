import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <div style={{ display: "flex", marginLeft: "5%" }}>
          <Typography variant="h6">
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "link")}
            >
              Login
            </NavLink>
          </Typography>
          <Typography variant="h6" sx={{ marginLeft: "5%" }}>
            <NavLink
              to="/todo"
              className={(navData) => (navData.isActive ? "active" : "link")}
            >
              Todo
            </NavLink>
          </Typography>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
