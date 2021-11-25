import React from "react";
import styled from "styled-components";

interface IGetNewUser {
    getUser: () => void;
}

const ICON = styled.i`
  font-size: 1.5rem;
  padding: 0.3rem;
  cursor: pointer;
  padding: 1rem;
`;

const FooterWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  display: flex;
  justify-content: space-between;
`;

const Footer: React.FC<IGetNewUser> = (props: IGetNewUser) => {
    return (
        <FooterWrapper>
            <ICON className="fas fa-redo" />
            <ICON className="fas fa-times" onClick={() => { return props.getUser() }} />
            <ICON className="fas fa-heart" />
            <ICON className="fas fa-star" onClick={() => { return props.getUser() }} />
        </FooterWrapper>
    );
};
export default Footer;
