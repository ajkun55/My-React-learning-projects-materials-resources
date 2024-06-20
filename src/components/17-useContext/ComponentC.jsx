//useContext() = React hook that allows you to share values between multiple layers of components without passing props each layer.
import './styles.css'
import ComponentD from './ComponentD';
import {useContext} from 'react';
import {UserContext} from './ComponentA.jsx'

function ComponentC(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>Hello Again {user}</h2>
            <ComponentD />
        </div>
    );

}
export default ComponentC