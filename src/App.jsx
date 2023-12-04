import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...todoList, newTask]);
  };
  function deleteTask(deleteTaskName) {
    setTodoList(
      todoList.filter((task) => {
      return  task.taskName !== deleteTaskName;
      })
    );
  }
  function toggleCheck(taskName) {
    
  }
  console.log(todoList);
  return (
    <div className="App">
      <div className="container">
        <h1>TODO List</h1>
        <TaskInput addTask={addTask}></TaskInput>
        <div className="todoList">
          <h6>ToDos</h6>
          <div className="todos">
            <ul className="item">
              {todoList.map((task, key) => (
                <TaskItem
                  task={task}
                  key={key}
                  deleteTask={deleteTask}
                ></TaskItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
