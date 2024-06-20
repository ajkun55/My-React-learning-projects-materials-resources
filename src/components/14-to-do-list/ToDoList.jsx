import { useState } from "react";
import './styles.css'

function ToDoList(){

    const [tasks, setTasks] = useState(['Eat breakfast', 'Take a shower', 'Coding']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if( newTask.trim() !== '' ){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }        
    }
    function deleteTask(index){
        setTasks(tasks.filter((_, i)=> i !== index))
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [ updatedTasks[index], updatedTasks[index - 1] ] = [ updatedTasks[index - 1], updatedTasks[ index ] ];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [ updatedTasks[index], updatedTasks[index + 1] ] = [ updatedTasks[index + 1], updatedTasks[ index ] ];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div className="input-div">
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="add-btn" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task,index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="move-btn" onClick={()=>moveTaskUp(index)}>⏫</button>
                    <button className="move-btn" onClick={()=>moveTaskDown(index)}>⏬</button>
                    </li>)}
            </ol>
        </div>
    );

}

export default ToDoList