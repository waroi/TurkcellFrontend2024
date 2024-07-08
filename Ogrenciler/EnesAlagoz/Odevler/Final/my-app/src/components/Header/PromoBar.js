import React from "react";
import styled from "styled-components";

const PromoBarContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`;

const PromoBar = () => {
  return (
    <PromoBarContainer>
      Sign up and get 20% off to your first order.{" "}
      <a href="/signup" style={{ color: "white", textDecoration: "underline" }}>
        Sign Up Now
      </a>
    </PromoBarContainer>
  );
};

export default PromoBar;
