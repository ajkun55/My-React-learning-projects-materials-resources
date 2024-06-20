/* eslint-disable no-unused-vars */
// useState() = Re-render the component when the state value change.
// useRef() = "use reference" does not re-render the component when the state value change.
//             when you want component to remember some information, but without trigger new render.
//             1. Accessing/Interacting with DOM elements
//             2. Handling focus, animations and transitions
//             3. Managing timers and intervals

import { useState, useEffect, useRef } from "react"

function UseRefExample(){

    //const [number, setNumber] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log('COMPONENT RENDERED')
    })

    function handleClick(){
        //setNumber( n => n + 1);
        ref.current++;
        console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'blue';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'blue';
        inputRef.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'blue';
        inputRef2.current.style.backgroundColor = '';
        inputRef.current.style.backgroundColor = '';
    }

    return(
        <div>
            <button onClick={handleClick}>Click me</button><br />
            <input ref={inputRef} /><br />

            <button onClick={handleClick2}>Click me 2</button><br />
            <input ref={inputRef2} /><br />

            <button onClick={handleClick3}>Click me 3</button><br />
            <input ref={inputRef3} />
        </div>
    );

}

export default UseRefExample