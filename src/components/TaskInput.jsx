import React, { useState } from "react";

function TaskInput({addTask}) {
    const[task,setTask]=useState("")
    
    // console.log(task);

    // 
    function handleAddTask(event){
        event.preventDefault()
        if (task.trim()==='') return
        addTask(task)
        setTask('')
    }
  return (
    <form onSubmit={handleAddTask}>
      <div className="input">
        <input type="text" value={task} placeholder="Add todo" onChange={(event)=>{setTask(event.target.value)}} ></input>
      </div>
      
      <button>+</button>
    </form>
  );
}

export default TaskInput;
