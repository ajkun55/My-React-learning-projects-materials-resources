import PropTypes from 'prop-types'
import './styles.css'

function UserGreeting(props){
    const {isLoggedIn=false, userName='Guest'} = props;
/*
    if(isLoggedIn){
        return <h2>Welcome {userName}</h2>
    }else{
        return <h2>Please Log in to continue</h2>
    }   */
    
    const welcomeMessage = <h2 className='welcome-message'>Welcome {userName}</h2>;
    const loginPrompt =  <h2 className='login-prompt'>Please Log in to continue</h2>;
    
    return isLoggedIn ? welcomeMessage : loginPrompt ;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

export default UserGreeting

//Conditional rendering = control what to render based on certain conditions(show, hide or change)