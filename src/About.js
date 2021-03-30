import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';

const About = () => {

    let history = useHistory();

    let location = useLocation();
    let printedLocation = location.pathname.toString();

    const GoToAboutPage = () => {
        history.goBack();
    }

    return (
        <>
            <div className="container">
                <h1>This Is About Page</h1>
                <h5>You Are At {printedLocation}</h5>
                <button onClick={GoToAboutPage}>Go To Home Page</button>
            </div>
        </>
    );
}

export default About;
