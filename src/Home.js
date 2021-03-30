import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Home = () => {

    let history = useHistory();

    let location = useLocation();
    let printedLocation = location.pathname.toString();

    const GoToHomePage = () => {
        history.push("/about");
    }

    return (
        <>
            <div className="container">
                <h1>This Is Home Page</h1>
                <h5>You Are At {printedLocation}</h5>
                <button onClick={GoToHomePage}>Go To About Page</button>
            </div>
        </>
    );
}

export default Home;
