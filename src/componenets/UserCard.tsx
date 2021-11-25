import React from "react";
import IUsers from "../types/users.type";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import UserContent from "./UserContent";

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-size: cover;
`;

interface IUserCard {
    user: IUsers;
    getUser: () => void,
}

const UserCard: React.FC<IUserCard> = (props) => {
    const onCardLeftScreen = (myIdentifier: any) => {
        console.log(myIdentifier + " left the screen");
    };

    return (
        <CardDiv>
            <TinderCard
                key={props.user.name.first}
                className="swipe"
                onSwipe={() => {
                    return props.getUser()
                }}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                preventSwipe={["up", "down"]}
            >
                <ImgDiv
                    style={{ backgroundImage: `url(${props.user.picture.large})` }}
                >
                    <UserContent {...props.user} />
                </ImgDiv>
            </TinderCard>
        </CardDiv>
    );
}

export default UserCard;
