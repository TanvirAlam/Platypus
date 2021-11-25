import React from "react";
import ReactCountryFlag from "react-country-flag";
import IUsers from "../types/users.type";
import {ContentWrapper, TextWrapper} from "../style/Style";

const UserContent: React.FC<IUsers> = (props: IUsers) => {
    return (
        <ContentWrapper>
            <TextWrapper>
                <p>{props.name.first} {props.name.last}, {props.dob.age}, {props.gender}</p>
                <p>{props.email}</p>
            </TextWrapper>
            <div>
                <ReactCountryFlag
                    countryCode={props.nat}
                    style={{
                        fontSize: '2rem',
                        lineHeight: '2rem',
                    }}
                />
            </div>
        </ContentWrapper>
    )
}

export default UserContent;
