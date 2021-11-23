import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Container, List, ListItem, Logo } from "./Navbar.styles";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Logo>Passport-JS App</Logo>
      </Link>
      <List>
        {user ? (
          <>
            <ListItem>
              <Avatar alt="" src={user.photos[0].value} />
            </ListItem>
            <ListItem>{user.displayName || user.username}</ListItem>
            <ListItem onClick={handleLogout}>Logout</ListItem>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            <ListItem>Login</ListItem>
          </Link>
        )}
      </List>
    </Container>
  );
};

export default Navbar;
