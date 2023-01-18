import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  
  return(


    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {

const dateSpan = {
  fontSize: '17px',
}


        return(
      
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
                <span className='text2Green' style={dateSpan}>{task.date}</span>
              </div>
              <div className="iconsWrap">
              
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false,
                      date : new Date().toDateString()
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
                
              </div>
            </div>
          </React.Fragment >
        )
      })
      }  
    </>
  )
}

export default ToDo;