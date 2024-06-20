//Updater function = A function passed as an argument to setState() usually setYear(arrow function)
//                   Allow for safe updates based on the previous state
//                   Used with multiple state updates ans asynchronous function
import {useState} from 'react'
import '../7-useState-hook/styles.css'

function UpdaterCounter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);     // use arrow function rather than only (count+1) can increment 3 now 
        setCount(c => c + 1);    //use current sate to compute next state, set functions do not trigger an update
        setCount(c => c + 1);    //React batch together state updates for performance reasons
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='counter-display'>Count: {count}</p>
            <button className='counter-button' onClick={increment}>Increment</button>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
        </div>);
}

export default UpdaterCounter