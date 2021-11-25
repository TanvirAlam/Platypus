import React from "react";
import {ICON, HeaderWrapper} from "../style/Style";

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
