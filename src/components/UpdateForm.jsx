import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {


  // const inputRef = useRef();

  const clearInput = () => {

    // Focus the input field
  // inputRef.current.value = ''
  
  let value ={target : {value :  '' }}
  changeTask(value)
 
  }
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <textarea 
       
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
        <FontAwesomeIcon  icon={faTrashCan}  style={{ fontSize: '25px', margin: '5px 18px -6px 0px'}}  onClick={()=>{clearInput()}}/>

          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
          >Update</button>
          <button
            onClick={cancelUpdate}
            className="btn btn-lg btn-warning"
          >Cancel</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;