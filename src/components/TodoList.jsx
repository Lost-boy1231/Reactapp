import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions/index";

const TodoList = () => {
  const { list } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul className="list-group my-5 border border-dark border-4">
        <h3 className="text-capitalize text-center">my Todo list</h3>
        {list.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <div class="d-grid gap-2 col-6 mx-auto">
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-0 hover-zoom"
        onClick={handleClearList}
      >
        Clear List
      </button>
      </div>
    </div>
  );
};

export default TodoList;
