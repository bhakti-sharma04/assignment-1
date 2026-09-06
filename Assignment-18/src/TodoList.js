import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(["Study React", "Complete Assignment"]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput('');
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', width: '300px', margin: '20px auto' }}>
      <h3>1. Simple To-Do List</h3>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask} style={{ marginLeft: '5px' }}>Add</button>

      <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ marginBottom: '8px' }}>
            {task}
            <button onClick={() => removeTask(i)} style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
