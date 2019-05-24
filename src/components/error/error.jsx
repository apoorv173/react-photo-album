import React from "react";

export const Error = ({ error }) => {
    return (
        <h1>{error ? error : 'Something went wrong, please try again later. '}</h1>
    );
}
export default Error;