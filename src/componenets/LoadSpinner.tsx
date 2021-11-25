import React from 'react';
import Loader from "react-loader-spinner";
import iLoadSpinner from "../types/loadSpinner.type";

const LoadSpinner: React.FC<iLoadSpinner> = (props: iLoadSpinner) => {
    return (
        <div>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                visible={props.isLoading}
            />
        </div>
    );
}

export default LoadSpinner;
