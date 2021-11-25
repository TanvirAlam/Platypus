import React from "react";
import {ICON, FooterWrapper} from "../style/Style";
import IGetNewUser from "../types/getUser.type";

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
