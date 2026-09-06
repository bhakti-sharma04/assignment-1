import React from 'react';
import TodoList from './TodoList';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Assignment 18 - Hooks (useState & useEffect)</h2>
      <TodoList />
      <WeatherApp />
    </div>
  );
}

export default App;
