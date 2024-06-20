// useEffect() = React hook that tells React do some code when:(pick one)
//              this component rerenders; this component mounts; the state of a value
//              useEffect( function, [dependencies] )
// 1. useEffect( () => {} )                 // Runs after every re-render
// 2. useEffect( () => {}, [] )             // Runs only on mount
// 3. useEffect( () => {}, [value] )        // Runs on mount + when value change
// USES
// #1 Event Listeners
// #2 DOM manipulations
// #3 Subscriptions ( real time updates )
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import {useState, useEffect} from 'react'

function UseEffectExample(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    //useEffect( () => {document.title = `Count: ${count}`} ); //every re-render
    //useEffect( () => {document.title = `Count: ${count}`}, [] ); // Runs only on mount
    useEffect( () => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color] ); // Runs on mount + when value change    

    function addCount (){
        setCount( c => c + 1);
    }
    
    function subtractCount (){
        setCount( c => c - 1);
    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectExample