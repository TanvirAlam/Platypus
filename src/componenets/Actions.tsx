import React, {Component} from "react";
import ContextProvider from "../store/ContextProvider";
import {IoIosCloseCircleOutline, IoIosHeart, IoMdContacts} from "react-icons/io";

interface IUserActions {
    onSwipe: (event: React.MouseEvent<HTMLElement>) => void,
    onReject: (event: React.MouseEvent<HTMLElement>) => void,
    onHired: (event: React.MouseEvent<HTMLElement>) => void
}

class Actions extends Component {
    static contextType = ContextProvider;

    render() {
        let value = this.context;
        return (
            <div>
                {
                    <>
                        <div className="action-container">
                            <a href="#" onClick={value.onReject}>
                                <IoIosCloseCircleOutline className="icons" />
                            </a>
                            <a href="#" onClick={value.onHired}>
                                <IoIosHeart className="icons" />
                            </a>
                        </div>
                        <div className="action-container">
                            <a href="#" onClick={value.onReject}>
                                <IoMdContacts className="icons" />
                            </a>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default Actions;
