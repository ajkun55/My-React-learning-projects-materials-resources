import { useState, useEffect } from "react"
import './styles.css'

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect( () => {
        // eslint-disable-next-line no-unused-vars
        const intervalId = setInterval( () => {
            setTime(new Date())
        } , 1000);

        return () => {
            clearInterval();
        }

    }, [] );

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(num){
        return (num < 10 ? '0' : '') + num;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );

}

export default Clock