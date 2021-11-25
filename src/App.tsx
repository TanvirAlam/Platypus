import React, {useState, useEffect} from "react";
import axiosRequest from "./services/axios-request";
import IUsers from "./types/users.type";
import handleResponse from "./utility/handleResponse";
import UserCard from "./componenets/UserCard";
import styled from "styled-components";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

const DivWrapper = styled.div`
  width: 300px;
  max-height: 500px;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
                return handleResponse(res)
            }).then((res: any) => {
                setUser(res[0])
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <DivWrapper className="App">
            <Header />
            <UserCard user={user} getUser={getUser} />
            <Footer getUser={getUser} />
        </DivWrapper>
    );
}

export default App;
