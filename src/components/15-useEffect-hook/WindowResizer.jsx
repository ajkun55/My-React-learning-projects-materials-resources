
import { useState, useEffect } from "react";

function WindowResizer(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect( () => {
        window.addEventListener('resize', handleResize);
        console.log('EVENT LISTENER ADDED');

        return () => {
            window.removeEventListener('resize', handleResize);   //CLEAN UP CODE
            console.log('EVENT LISTENER REMOVED');
        }
    }, [] );

    useEffect( () => {
        document.title = `Size: ${width} * ${height}`
    }, [width, height] )

   // window.addEventListener('resize', handleResize);
   // console.log('EVENT LISTENER ADDED');   // the issue of plain js is event listener added every render, only need one, so use useEffect()

    return (
        <div>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </div>
    );
}

export default WindowResizer
