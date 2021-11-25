import React from "react";
import {ICON, IMG, HeaderWrapper} from "../style/Style";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <ICON className="fas fa-users" />
            <IMG src="/images/img.png" alt="platypus.io"/>
            <ICON className="far fa-envelope" />
        </HeaderWrapper>
    );
};

export default Header;
