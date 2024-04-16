import React from 'react';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  </div>
      );
    }
export default App;