//useContext() = React hook that allows you to share values between multiple layers of components without passing props each layer.
import './styles.css'
import ComponentC from './ComponentC';

function ComponentB(){

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC  />
        </div>
    );

}
export default ComponentB