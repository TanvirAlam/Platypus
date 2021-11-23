import React, { useState, useEffect } from 'react';
import './App.css';
import axiosRequest from "./services/axios-request";
import IUsers from "./types/users.type";
import TinderCard from "react-tinder-card";
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import ReactCountryFlag from "react-country-flag";


const App: React.FC = () => {
    const initialValues: IUsers = {
        gender: "",
        dob: {
            age: 0
        },
        name: {
            first: "",
            last: "",
        },
        location: {},
        email: "",
        picture: {
            large: ""
        },
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

    const onSwipe = () => {
        getUser();
    }

    const hired = () => {
        console.log('Hired')
    }

    const rejected = () => {
        getUser();
    }

    console.log(user)

  return (
      <div className="container">
          <TinderCard
              onSwipe={onSwipe}
              preventSwipe={['right', 'left']}
          >
              <div className="image-container">
                  <img src={user.picture.large} alt={user.name.first} />
                  <div className="user-card">
                      <div className="user-information">
                          <h2>{user.name.first} {user.name.last}, {user.dob.age}, {user.gender}</h2>
                          <span>{user.email}</span>
                      </div>
                      <div>
                          <ReactCountryFlag
                              countryCode={user.nat}
                              style={{
                                  fontSize: '4rem',
                                  lineHeight: '4rem',
                              }}
                          />

                      </div>
                  </div>
              </div>
              <div className="action-container">
                  <a href="#" onClick={rejected}>
                      <IoIosCloseCircleOutline className="icons" />
                  </a>
                  <a href="#" onClick={hired}>
                      <IoIosCheckmarkCircleOutline className="icons" />
                  </a>

              </div>
          </TinderCard>
      </div>
  );
}

export default App;
