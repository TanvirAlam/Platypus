import React from "react";
import ReactCountryFlag from "react-country-flag";
import IUsers from "../types/users.type";
import styled from "styled-components";

const ContentWrapper = styled.div`
    display:flex;
    background-color:rgba(0, 0, 0, 0.6);
    color:white;
    padding:1rem;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    bottom:0;
    width:90%;
    height:20%;
    border-radius:1rem
`;

const TextWrapper = styled.div`
    font-size:1rem;
    font-weight:bold;
`;


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
