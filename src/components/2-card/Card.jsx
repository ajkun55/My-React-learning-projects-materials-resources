import './styles.css'

function Card(){

    return(
        <div className="card">
            <img  className='card-image' src="https://i.pravatar.cc/200" alt="profile picture"></img>
            <h2 className='card-title'>John A</h2>
            <p className='card-text'>Developer, Learner, I make projects</p>
        </div>
    );
}

export default Card