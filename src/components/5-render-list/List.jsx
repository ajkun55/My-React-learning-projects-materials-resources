import PropTypes from 'prop-types'
import './styles.css'

function List(props){

    const {items=[], category='category'} =  props;  
   /* const fruits = [{id: 1, name: 'apple', calories: 95}, {id: 2, name: 'banana', calories: 105}, 
        {id: 3, name: 'orange', calories: 45}, {id: 4, name: 'pineapple', calories: 37}, 
        {id: 5, name: 'melon', calories: 57}, {id: 6, name: 'coconut', calories: 159}];*/
    //fruits.sort((a,b)=> a.name.localeCompare(b.name));   //alphabetical
    //fruits.sort((a,b)=> b.name.localeCompare(a.name));   //reverse alphabetical
    //fruits.sort((a,b)=>a.calories-b.calories);           //Numerical
    //fruits.sort((a,b)=>b.calories-a.calories);             //Reverse numerical
    //const lowCalFruits = fruits.filter(fruit=>fruit.calories<100);

    const listItem = items.map((fruit)=>
                    <li key={fruit.id}>{fruit.name}: &nbsp;
                    <strong>{fruit.calories}</strong></li>);

    return(
        <>
            <h3 className='list-category'>{category}</h3>
            <ul className='list-items'>{listItem}</ul>
        </>); 
    
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, category: PropTypes.string})),
    category: PropTypes.string,
}

export default List

