import React from "react";
import IUsers from "../types/users.type";
import TinderCard from "react-tinder-card";
import UserContent from "./UserContent";
import ContextProvider from "../store/ContextProvider";
import Actions from "./Actions";

interface IUserCard {
    onSwipe: (event: React.MouseEvent<HTMLElement>) => void,
    onReject: (event: React.MouseEvent<HTMLElement>) => void,
    onHired: (event: React.MouseEvent<HTMLElement>) => void,
    user: IUsers
}

const UserCard: React.FC<IUserCard> = (props) => {
    return (
        <div className="container">
            <TinderCard
                {...props.onSwipe}
                preventSwipe={['right', 'left']}
            >
                <UserContent {...props.user} />
                <ContextProvider.Provider value={{
                    onReject: props.onReject,
                    onHired: props.onReject
                }}>
                    {props.children}
                    <Actions />
                </ContextProvider.Provider>
            </TinderCard>
        </div>
    );
}

export default UserCard;
