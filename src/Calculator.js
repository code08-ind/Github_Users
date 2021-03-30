import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Calculator = () => {
    const [width, setWidth] = useState(window.screen.width);
    useEffect(() => {
        window.addEventListener('resize', changeWidth);
        console.log("Your Width Is Changed To " + width);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [width]);
    const changeWidth = () => {
        setWidth(window.innerWidth);
    }
    return (
        <>
            <div className="container">
                <h3>Actual Width Of Window Screen Is : </h3>
                <h1>{width} px</h1>
            </div>
        </>
    );
}

export default Calculator;
