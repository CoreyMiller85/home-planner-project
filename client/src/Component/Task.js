import React from "react";
import { useHistory } from "react-router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { config } from "../constants";
import "./Task.css";

const Task = (props) => {
  const history = useHistory();

  const handleClick = (id) => {
    history.push("/api/task/" + id);
  };

  const styles = {
    root: {
      maxWidth: "500px",
      minWidth: "150px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      margin: "1rem",
      boxShadow: "1px 1px 5px #ccc",
      cursor: "pointer",
    },
  };

  return (
    <div
      style={styles.root}
      className="card"
      onClick={() => handleClick(props.data._id)}
    >
      <h1>{props.data.title}</h1>
      <p>Materials:</p>
      <div>{props.data.materials.map((mat) => mat.name)}</div>
      <p>{props.data.importance}</p>
    </div>
  );
};

export default Task;
