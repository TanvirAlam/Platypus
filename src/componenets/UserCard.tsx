import React from "react";
import IUsers from "../types/users.type";
import TinderCard from "react-tinder-card";
import ReactCountryFlag from "react-country-flag";
import {IoIosCloseCircleOutline, IoIosHeart, IoMdContacts} from "react-icons/io";

interface IUserCard {
    onSwipe: (event: React.MouseEvent<HTMLElement>) => void,
    onReject: (event: React.MouseEvent<HTMLElement>) => void,
    onHired: (event: React.MouseEvent<HTMLElement>) => void,
    user: IUsers
}

const UserCard: React.FC<IUserCard> = (props: IUserCard) => {
    return (
        <div className="container">
            <TinderCard
                {...props.onSwipe}
                preventSwipe={['right', 'left']}
            >
                <div className="image-container">
                    <img src={props.user.picture.large} alt={props.user.name.first} />
                    <div className="user-card">
                        <div className="user-information">
                            <h1>{props.user.name.first} {props.user.name.last}, {props.user.dob.age}, {props.user.gender}</h1>
                            <h2>{props.user.email}</h2>
                        </div>
                        <div>
                            <ReactCountryFlag
                                countryCode={props.user.nat}
                                style={{
                                    fontSize: '4rem',
                                    lineHeight: '4rem',
                                }}
                            />

                        </div>
                    </div>
                </div>
                <div className="action-container">
                    <a href="#" {...props.onReject}>
                        <IoIosCloseCircleOutline className="icons" />
                    </a>
                    <a href="#" {...props.onHired}>
                        <IoIosHeart className="icons" />
                    </a>
                </div>
                <div className="action-container">
                    <a href="#" {...props.onReject}>
                        <IoMdContacts className="all-user-icons" />
                    </a>
                </div>
            </TinderCard>
        </div>
    );
}

export default UserCard;
