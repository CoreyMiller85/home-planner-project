import React from "react";
import { useHistory } from "react-router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Task = (props) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push("/api/task/" + id);
  };

  const handleDelete = () => {
    const response = axios.delete(
      "http://localhost:5000/api/task/" + props.data._id
    );
  };

  return (
    <div className="task-div" onClick={() => handleClick(props.data._id)}>
      <h1 className="task-title">{props.data.title}</h1>
      <p>{props.data.materials}</p>
      <p>{props.data.importance}</p>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
    </div>
  );
};

export default Task;
