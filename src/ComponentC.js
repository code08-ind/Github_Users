import React, { useContext } from 'react';
import { FirstName, LastName } from './UseContext';

const ComponentC = () => {

    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);

    return (
        <>
            <h1 className="mainHead">I Am {firstName} {lastName}</h1>
        </>
    );
}

export default ComponentC;
