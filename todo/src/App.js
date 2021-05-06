import React, { useState } from 'react';
import './App.css';
import data from './data.json';


import Header from './components/Header';
import ToDoList from "./components/ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  return (
    <div className="App">
      <div className="okvir">
        <div className="border">
          <Header/>
          <ToDoList toDoList={toDoList}/>
        </div>
      </div>
    </div>
  );
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

 /* const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      if (task.id == id) {
        task.complete = !task.complete
      }
      return task;
    });
    setToDoList(mapped);
  }*/
}

export default App;
