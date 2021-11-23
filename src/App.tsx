import React, { useState, useEffect } from 'react';
import './App.css';
import axiosRequest from "./services/axios-request";
import IUsers from "./types/users.type";

function App() {
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

  return (
    <div className="App">

    </div>
  );
}

export default App;
