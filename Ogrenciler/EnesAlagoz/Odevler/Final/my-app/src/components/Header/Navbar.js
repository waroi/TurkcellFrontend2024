import React from "react";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 15px;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;

  input {
    border: none;
    outline: none;
    padding: 5px;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo>SHOP.CO</Logo>
      <Menu>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </Menu>
      <SearchBar>
        <input type="text" placeholder="Search for products..." />
        <FaSearch />
      </SearchBar>
      <FaShoppingCart />
    </NavBarContainer>
  );
};

export default NavBar;
