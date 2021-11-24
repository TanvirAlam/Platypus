import React from "react";
import IUsers from "../types/users.type";
import TinderCard from "react-tinder-card";
import {IoIosCloseCircleOutline, IoIosHeart, IoMdContacts} from "react-icons/io";
import UserContent from "./UserContent";

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
                <UserContent {...props.user} />
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
