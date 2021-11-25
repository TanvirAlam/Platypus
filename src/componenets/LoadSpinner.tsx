import React, {Component} from 'react';
import Loader from "react-loader-spinner";

class LoadSpinner extends Component {
    render() {
        return (
            <div>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        );
    }
}

export default LoadSpinner;
