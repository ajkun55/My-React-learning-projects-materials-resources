//useContext() = React hook that allows you to share values between multiple layers of components without passing props each layer.
import './styles.css'
import {useContext} from 'react';
import {UserContext} from './ComponentA.jsx'

function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );

}
export default ComponentD