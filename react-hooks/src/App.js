import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState();

  const addTodo = () => {
    setTodos([...todos, {
      id: todos.lenght,
      value: value
    }])
  };

  const addValue = (e) => {
    setValue(e.target.value)
  };

  return(
    <div>
      <input onChange={addValue}/>
      <button onClick={addTodo}>Push</button>
      <ul>
        {todos.map(li => {
            return <li key={li.id}>{li.value}</li>
        })
        }
      </ul>
    </div>
  );
};

export default App;
