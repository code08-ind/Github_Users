import React, { useRef, useState } from 'react';

const UseRef = () => {

    //? No Re-render the page for new info
    const luckyName = useRef(null);
    const [state, setState] = useState(false);

    const SubmitForm = (e) => {
        e.preventDefault();
        setState(true);
        console.log(luckyName.current.value);
    }

    return (
        <>
            <div className="container">
                <h1>useRef Hook Use</h1>
                <form action="" onSubmit={SubmitForm}>
                    <div className="new">
                        <input type="text" id="luckyName" placeholder="Enter Your Lucky Name" ref={luckyName} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                    <h5>{state ? `${luckyName.current.value}` : `This Is Anonymous`}</h5>
                </form>
            </div>
        </>
    );
}

export default UseRef;
