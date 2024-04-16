import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const changeBackground = (e, text) => {
    e.target.style.borderStyle = text;
    // e.target.style.backgroundColor = "grey";
  };

  const styled = {
    textDecoration: completed ? "line-through yellow 2px" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-2 bg-dark text-white" id="listitem">
     <i class="bi bi-caret-right-square-fill"></i><strong> <h6>
        {/* {id} : {text} */}
        {text}

      </h6>
      </strong>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <i
            className="bi bi-check2-circle"
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={hanldeToggle}
          />
        </span>
        <span className="mx-2 text-danger">
          <i
            className="bi bi-trash3"
            onMouseEnter={e => changeBackground(e, "groove")}
            onMouseLeave={e => changeBackground(e, "none")}
            onClick={handleDelete}
          />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;