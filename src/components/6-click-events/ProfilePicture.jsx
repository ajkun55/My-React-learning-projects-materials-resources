

function ProfilePicture(){
   // const imgUrl = '../../assets/profile.jpg';

    const imgUrl = 'https://i.pravatar.cc/200';

    const handleClick = (e) => e.target.style.display = 'none';

    return <img src={imgUrl} onClick={(e) => handleClick(e)}></img>
}

export default ProfilePicture