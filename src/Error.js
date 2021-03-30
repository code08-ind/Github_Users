import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';

const Error = () => {

    let history = useHistory();
    
    let location = useLocation();
    let printedLocation = location.pathname.toString();

    const GoToHomePage = () => {
        history.push("/");
    }

    return (
        <>
            <div className="container">
                <h1>This Is Error Page</h1>
                <h5>You Are At {printedLocation}</h5>
                <button onClick={GoToHomePage}>Go To Home Page</button>
            </div>
        </>
    );
}

export default Error;
