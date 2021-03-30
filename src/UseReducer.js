import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'INCREMENT'&& state >= 0) {
        return state + 1;
    }
    else if (action.type === 'DECREMENT' && state > 0) {
        return state - 1;
    }
    return state;//! always we need to return something
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className="container">
                <h1>{state}</h1>
                <button className="btns" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button className="btns" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            </div>
        </>
    );
}

export default UseReducer;
