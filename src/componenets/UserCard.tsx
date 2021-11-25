import React from "react";
import IUserCard from "../types/userCard.type";
import {CardDiv, ImgDiv } from "../style/Style";
import TinderCard from "react-tinder-card";
import UserContent from "./UserContent";
import LoadSpinner from "./LoadSpinner";

const UserCard: React.FC<IUserCard> = (props) => {
    return (
        <CardDiv>
            { props.isLoading ? (<LoadSpinner />) : (
                <TinderCard
                    key={props.user.name.first}
                    className="swipe"
                    onSwipe={() => {
                        return props.getUser()
                    }}
                    onCardLeftScreen={() => {
                        return props.getUser()
                    }}
                    preventSwipe={["up", "down"]}
                >
                    <ImgDiv style={{ backgroundImage: `url(${props.user.picture.large})` }}>
                        <UserContent {...props.user} />
                    </ImgDiv>
                </TinderCard>
            )}

        </CardDiv>
    );
}

export default UserCard;
