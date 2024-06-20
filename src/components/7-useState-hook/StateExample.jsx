/* eslint-disable no-unused-vars */
//React hook = special function that allow functional components to use React features without writing class components.
//useState() = A React hook that allows the creation of a stateful variable and a setter function to update its value in virtual DOM.

import React, {useState} from 'react'

function StateExample(){
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('JOHN')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmploymentStatus = () =>{
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmploymentStatus}>Increment Age</button>
        </div>);
}

export default StateExample