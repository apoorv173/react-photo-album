import React from "react";
import loader from '../../assets/loader.gif';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner">
                <img src={loader} alt="loading data" />
            </div>
        </div>
    )
}

export default Loader;