import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 mt-5 ">
            <TodoList />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
