import React from 'react';
import { useState, useEffect } from 'react'

const HomePage = () => {

    const [value, setValue] = useState(0)

    console.log(value)

    function handleSubmit(event){
        event.preventDefault();
    }

    return ( 
        <>
        <h1>Hello World Home Page</h1>
        <div>
            You have ${value} USD to convert
        </div>
        <form>
            <label>Enter value to convert:
                <input type='integer' value={value} onChange={(event) =>setValue(event.target.value)}></input>
            </label>
            {/* <button onClick={handleSubmit}>Convert</button> */}
        </form>
        <div>
            Euro = {value * 0.92711}
        </div>
        <div>
            Pound = {value * 0.80551}
        </div>
        <div>
            Yen = {value * 138.567}
        </div>
        <div>
            Peso = {value * 17.9312}
        </div>
        <div>
            Bitcoin = {value * 0.00004}
        </div>
        </>
    
     );
}
 
export default HomePage;