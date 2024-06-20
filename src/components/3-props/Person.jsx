//Props = read-only properties that shared between components
//        A parent component send data to child component
//        <Component key=value />

import './styles.css'
import PropTypes from 'prop-types'

function Person(props){
    const {name = 'Guest', age = 18, isStudent = false} = props;    //dafault parameters in ES6
   
    return(
        <div className="student">
            <p>Name: {name}</p> 
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Person


//PropTypes = a mechanism that ensures that the passed value is proper data type
//            age: PropTypes.number

//defaultProps = default values for props incase they are not passed from parent component
//              name: 'Guest'
//              it's not working and been removed...
// 
/*
Person.defaultProps = {
    name: "Guest",
    age: 18,
    isStudent: false,
}          */