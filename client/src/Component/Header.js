import React from "react";
import { NavLink, Link } from "react-router-dom";

const styles = {
  root: {
    background: "#333",
    color: "white",
  },
  headerWrapper: {
    width: "65%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  nav: {
    marginLeft: "auto",
  },
  navItem: {
    marginRight: "1rem",
    color: "white",
    textDecoration: "none",
  },
};

const Header = () => {
  return (
    <div className="header" style={styles.root}>
      <div className="header-wrapper" style={styles.headerWrapper}>
        <h3>
          <Link to="/" style={styles.navItem}>
            Project Planner
          </Link>
        </h3>
        <nav style={styles.nav}>
          <NavLink to="/newtask" style={styles.navItem}>
            New Project
          </NavLink>
          <a style={styles.navItem}>Navigation Item</a>
          <a style={styles.navItem}>Navigation Item</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
