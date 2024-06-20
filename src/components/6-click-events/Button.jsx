// click event = interaction when user click on specific element.
//               respond to click by passing a callback to the onclick event handler

function Button(){
    
   /* let count = 0;
    const handleClick = (name) => {
       if(count < 3){
            count++;
            console.log(`${name} You clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }   
    return <button onClick={() => handleClick('John')}>Click me 😎</button>  */
    const handleClick = (e) => e.target.textContent = 'OUCH!🤣';
        
     return <button onClick={(e) => handleClick(e)}>Click me 😎</button> 
}

export default Button