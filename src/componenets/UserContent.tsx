import React from "react";
import ReactCountryFlag from "react-country-flag";
import IUsers from "../types/users.type";

const UserContent: React.FC<IUsers> = (props: IUsers) => {
    return (
        <div className="image-container">
            <img src={props.picture.large} alt={props.name.first} />
            <div className="user-card">
                <div className="user-information">
                    <h1>{props.name.first} {props.name.last}, {props.dob.age}, {props.gender}</h1>
                    <h2>{props.email}</h2>
                </div>
                <div>
                    <ReactCountryFlag
                        countryCode={props.nat}
                        style={{
                            fontSize: '4rem',
                            lineHeight: '4rem',
                        }}
                    />

                </div>
            </div>
        </div>
    )
}

export default UserContent;
