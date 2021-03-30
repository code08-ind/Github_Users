import React, { useState } from 'react';
import useIncrement from './useIncrement';

const Increment = () => {
    document.title = "Chats";

    const [state, setState] = useState(0);

    useIncrement(state);

    const IncrementOnClick = () => {
        setState(state + 1);
    }

    return (
        <>
            <div className="container">
                <h1>{state}</h1>
                <button onClick={IncrementOnClick}>Click To Increment</button>
            </div>
        </>
    );
}

export default Increment;
