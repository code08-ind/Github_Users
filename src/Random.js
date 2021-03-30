import React from 'react';
import { useParams } from 'react-router-dom';

const Random = () => {
    let { fname, lname } = useParams();//! add multiple values as dynamically
    return (
        <>
            <div className="container">
                <h1>This Is User {fname} {lname} Page</h1>
                <p>Page Used Was : <span style={{ fontWeight: 'bold' }}>/user/{fname}/{lname}</span></p>
            </div>
        </>
    )
}

export default Random;
