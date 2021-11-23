import React, { useState, useEffect } from 'react';
import './App.css';
import axiosRequest from "./services/axios-request";
import IUsers from "./types/users.type";
import TinderCard from "react-tinder-card";

const App: React.FC = () => {
    const initialValues: IUsers = {
        gender: "",
        name: {},
        location: {},
        email: "",
        pictures: {},
        nat: ""
    };

    const [user, setUser] = useState<IUsers>(initialValues);

    const getUser = async () => {
        await axiosRequest.getUser()
            .then((res: any) => {
                setUser(res.data.results[0])
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log(user)

    const onSwipe = (direction: any) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: any) => {
        console.log(myIdentifier + ' left the screen')
    }

  return (
    <div className="App">
        <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['right', 'left']}
        >
            Pictures
        </TinderCard>
    </div>
  );
}

export default App;
