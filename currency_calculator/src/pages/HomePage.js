import React from 'react';
import { useState, useEffect } from 'react';
import currency from './../components/currency'
import "./HomePage.css"

const HomePage = () => {

    const [value, setValue] = useState(0)
    const [new_value, setNew_Value] = useState([])

    console.log(value)
    console.log(currency)
    console.log(new_value)

    function handleSubmit(event){
        event.preventDefault();
    }

    return ( 
        <>
        <form className='form'>
            <label>Enter value to convert:
                <input type='integer' value={value} onChange={(event) =>setValue(event.target.value)}></input>
            </label>
            {/* <button onClick={handleSubmit}>Convert</button> */}
        <div>
            You have ${value} USD to convert
        </div>
        </form>
        <label> Choose the currency to convert to: 
            <select onChange={(event) => setNew_Value(event.target.value)}>{currency.map((el, index) => {
                return(
                    <option key={index} value={el.conversion}>{el.name}</option>
                )
            })}
            </select>
        </label>
        <div> Your ${value} USD would = {value * new_value}</div>
        </>
    
     );
}
 
export default HomePage;