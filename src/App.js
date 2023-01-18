import {useState, useEffect} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  useEffect(()=>{

    // First, get the string value from local storage
const arrayAsString = localStorage.getItem('yourKey');


    const storedtask = JSON.parse(arrayAsString);
   
      if (storedtask) {
        // Update the name state variable with the stored value
        setToDo([...storedtask]);
      }
    
  },[])


  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false , date : new Date().toDateString() }

      // First, convert the array to a JSON string
const arrayAsString = JSON.stringify([...toDo, newEntry]);

// Then, save the string in local storage
localStorage.setItem('yourKey', arrayAsString);
   
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
           // First, convert the array to a JSON string
const arrayAsString = JSON.stringify(newTasks);

// Then, save the string in local storage
localStorage.setItem('yourKey', arrayAsString);
    setToDo(newTasks);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
           // First, convert the array to a JSON string
const arrayAsString = JSON.stringify(newTask);

// Then, save the string in local storage
localStorage.setItem('yourKey', arrayAsString);
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
      date : new Date().toDateString()
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id ) ;
    let updatedObject = [...filterRecords, updateData]
       // First, convert the array to a JSON string
const arrayAsString = JSON.stringify(updatedObject);

// Then, save the string in local storage
localStorage.setItem('yourKey', arrayAsString);
    setToDo(updatedObject);
    setUpdateData('');
  }

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];


const imageStyle = {
  width : '5rem'
}

  return (
    <div className="container App">

   
    <img src='\d70bed7b595af732f54fbd268cda8e56.jpg' style={imageStyle} alt='logo'   ></img>
    <h2>To-Do List App </h2>
    <p>by David Raphi</p>
    <h4>Have a pleasent {dayName}.....😊 </h4>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}
<div id='toOverflow'>
<ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  
</div>

<div style={{ color : 'rgba(255, 255, 255, 0.281)'}}>copyright © David Raphi</div>


    </div>
  );
}

export default App;
