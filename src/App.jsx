{/* import Header from './components/1-first-simple-page/Header.jsx'
import Footer from './components/1-first-simple-page/Footer.jsx'
import Food from './components/1-first-simple-page/Food.jsx'
import Card from './components/2-card/Card.jsx'
import Person from './components/3-props/Person.jsx';
import UserGreeting from './components/4-conditionalRendering/UserGreeting.jsx'; 
import List from './components/5-render-list/List.jsx';
import Button from "./components/6-click-events/Button";
import ProfilePicture from "./components/6-click-events/ProfilePicture";
import StateExample from "./components/7-useState-hook/StateExample";
import Counter from "./components/7-useState-hook/Counter.jsx";   
import ChangeExample from './components/8-onchange-event-handler/ChangeExample.jsx'
import ColorPicker from "./components/9-color-picker-app/ColorPicker";
import UpdaterCounter from "./components/10-updater-function/UpdaterCounter";
import Car from "./components/11-update-objects-in-state/Car";
import FoodsArray from "./components/12-update-arrays-in-state/FoodsArray";
import CarArray from './components/13-update-array-of-objects-in-state/CarArray'
import ToDoList from "./components/14-to-do-list/ToDoList";
import UseEffectExample from "./components/15-useEffect-hook/useEffectExample";
import WindowResizer from "./components/15-useEffect-hook/WindowResizer";
import Clock from "./components/16-digital-clock-app/Clock.jsx";
import ComponentA from "./components/17-useContext/ComponentA";
import UseRefExample from "./components/18-useRef-hook/UseRefExample";*/}
import Stopwatch from "./components/19-stopwatch/Stopwatch";

function App() {

{/*  const fruits = [{id: 1, name: 'apple', calories: 95}, {id: 2, name: 'banana', calories: 105}, 
    {id: 3, name: 'orange', calories: 45}, {id: 4, name: 'pineapple', calories: 37}, 
    {id: 5, name: 'melon', calories: 57}, {id: 6, name: 'coconut', calories: 159}];
    const vegetables = [{id: 7, name: 'potatoes', calories: 110}, {id: 8, name: 'celery', calories: 15}, 
      {id: 9, name: 'carrots', calories: 25}, {id: 10, name: 'corn', calories: 63}, 
      {id: 11, name: 'broccoli', calories: 50}, {id: 12, name: 'tomato', calories: 30}]; */}
  return (
    <div className='container'>
{/*      <Header />
      <Food />
      <Footer />

       <Card />   

      <Person name="Tommy" age={30} isStudent={false} />
      <Person name="Anna" age={20} isStudent={true} />
      <Person name="Sandy" age={35} isStudent={false} />
      <Person name="Patrick" age={24} isStudent={true} />
      <Person />

      <UserGreeting isLoggedIn={true} userName="John" />
      <UserGreeting />
      <UserGreeting isLoggedIn={true} />

      {fruits.length > 0 ? <List items={fruits} category='Fruits' /> : null}
      {vegetables.length > 0 && <List items={vegetables} category='Vegetables' />}
      <List />

      <Button /> 
      <ProfilePicture />           

      <StateExample />
      <Counter />   

      <ChangeExample />

      <ColorPicker />

      <UpdaterCounter />

      <Car />

      <FoodsArray />   

      <CarArray />

      <ToDoList />

      <UseEffectExample />
      <WindowResizer />

      <Clock />  

      <ComponentA />    

      <UseRefExample />  */} 

      <Stopwatch />
      
    </div>
    
  );

}

export default App
