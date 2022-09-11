import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
        <Link to="/">Dogpod Item Exhange</Link>
      <Nav>
        <Button as={Link} to="/userlist">
          Members
        </Button>
        <Button as={Link} to="/itemlist">
          Free Items
        </Button>
        <Button as={Link} to="/doglist">
          Member Dogs
        </Button>
        <Button as={Link} to="/newitemform">
          New Item
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        {/* <NavLink className="nav" to="/dogs">Member Dogs</NavLink>
        <NavLink className="nav" to="/users">Member Owners</NavLink>
        <NavLink className="nav" to="/items">Free Items</NavLink> */}
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
