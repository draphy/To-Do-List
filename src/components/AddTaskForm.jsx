import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'


const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  
  // const inputRef = useRef();

  // const clearInput = () => {


  // inputRef.current.value = ''
  // setNewTask('')
  // }


  return(
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col">
          <textarea 
      
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
          
        </div>
        <div className="col-auto">
        <FontAwesomeIcon  icon={faTrashCan}  style={{ fontSize: '25px', margin: '5px 18px -6px 0px'}}  onClick={()=>{  setNewTask('')}}/>
          <button
            onClick={addTask}
            className="btn btn-lg btn-success"
          >Add Task</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddTaskForm;