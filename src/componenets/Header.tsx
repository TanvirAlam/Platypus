import React from "react";
import styled from "styled-components";

const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;
const HeaderWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <ICON className="fas fa-users" />
            <ICON className="fas fa-fire-alt" />
            <ICON className="far fa-envelope" />
        </HeaderWrapper>
    );
};
export default Header;
