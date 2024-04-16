import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/index";

const TodoInput = () => {
  const [text, setText] = useState(" ");
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
      // alert("cant not to empty text");
    }
    event.preventDefault();
  };

  return (
    <>
    <center><h1>TO DO LIST</h1></center>
    <div className="card card-body my-3" id="inputitem">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
            <i class="bi bi-list-task"/>
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-block btn-primary mt-3"
          onClick={handleSubmit}
        >
          ADD ITEM
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default TodoInput;
