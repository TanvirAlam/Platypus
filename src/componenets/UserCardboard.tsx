import React, {useState, useEffect} from "react";
import axiosRequest from "../services/axios-request";
import IUsers from "../types/users.type";
import handleResponse from "../utility/handleResponse";
import UserCard from "../componenets/UserCard";

const UserCardboard: React.FC = () => {
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

    const onSwipe = () => {
        getUser();
    }

    const hired = () => {
        console.log('Hired')
    }

    const reject = () => {
        getUser();
    }

    console.log(user)

    return (
        <UserCard
            onSwipe={onSwipe}
            onReject={reject}
            onHired={hired}
            user={user} />
    );
}

export default UserCardboard;
