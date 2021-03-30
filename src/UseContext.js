import React, { createContext } from 'react';
import ComponentA from './ComponentA';

const FirstName = createContext();
const LastName = createContext();

const UseContext = () => {

    return (
        <>
            <FirstName.Provider value={"John"}>
                <LastName.Provider value={"Mathews"}>
                    <ComponentA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}

export default UseContext;
export { FirstName, LastName };
