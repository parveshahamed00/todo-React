import React from 'react'
import {MdDeleteSweep} from "react-icons/md"
function TaskItem({task,deleteTask}) {
  return (
    <li className="items" style={{listStyle:"none"}}>
        <div className="items-text">
            <input type="checkbox" name="" id="" />
            <p>{task.taskName}</p>
            <MdDeleteSweep className='delete-icon' onClick={()=>deleteTask(task.taskName)}></MdDeleteSweep>
        </div>
    </li>
  )
}

export default TaskItem