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
            <button onClick={handleSubmit}>Convert</button>
        </form>
        </>
    
     );
}
 
export default HomePage;