// useContext() = React hook that allows you to share values between multiple layers of components without passing props each layer.
// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}><child /></MyContext.Provider>

// CONSUMER PROVIDER
// 1. import {useContext} from 'react';
//    import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext);

import './styles.css'
import ComponentB from './ComponentB';
import { useState, createContext } from 'react';

export const UserContext = createContext();


function ComponentA(){

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState('John')

    return(
        <div className="box">
            <h1>ComponentA</h1>
            
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    );

}
export default ComponentA