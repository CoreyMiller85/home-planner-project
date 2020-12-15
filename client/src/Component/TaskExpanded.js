import React, { Component } from "react";
import axios from "axios";

import { config } from "../constants";

class TaskExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      task: "",
      title: "",
      materials: [],
      importance: "",
      isEditing: false,
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      config.url.API_URL + "/api/task/" + this.props.match.params.id
    );
    const data = response.data.data;
    this.setState({
      title: data.title,
      materials: data.materials,
      importance: data.importance,
    });
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  handleDelete = async () => {
    const response = await axios.delete(
      config.url.API_URL + "/api/task/" + this.state.task._id
    );

    // TODO: Have this go to a page describing what you deleted and if it was successful.

    console.log(response);
    this.props.history.push("/");
  };

  handleEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleMaterialChange = (e) => {
    const mats = [...this.state.materials];
    const selectedMat = mats[e.target.id];
    selectedMat.name = e.target.value;
    this.setState({
      materials: mats,
    });
  };

  handleSubmit = async () => {
    try {
      const response = axios.patch(
        config.url.API_URL + "/api/task/" + this.state.id,
        {
          title: this.state.title,
          materials: this.state.materials,
          importance: this.state.importance,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    this.props.history.push("/");
  };

  render() {
    const editFields = this.state.isEditing ? (
      <div>
        <label htmlFor="title">Task Title: </label>
        <input
          type="text"
          name="title"
          placeholder={this.state.task.title}
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="materials">Task Materials: </label>
        {this.state.materials.map((mat, idx) => {
          return (
            <input
              type="text"
              name="materials"
              id={idx}
              value={this.state.materials[idx].name}
              onChange={(e) => this.handleMaterialChange(e)}
            />
          );
        })}
        <label htmlFor="Importance">Task Importance: </label>
        <input
          type="text"
          name="importance"
          placeholder={this.state.task.importance}
          value={this.state.importance}
          onChange={(e) => this.handleChange(e)}
        />
        <div
          style={{
            background: "red",
            display: "inline-block",
            width: "125px",
            height: "50px",
            color: "white",
            textAlign: "center",
          }}
          onClick={this.handleEditing}
        >
          Cancel
        </div>
        <div
          style={{
            background: "blue",
            display: "inline-block",
            width: "125px",
            height: "50px",
            color: "white",
            textAlign: "center",
          }}
          onClick={this.handleSubmit}
        >
          Submit
        </div>
      </div>
    ) : (
      <div>
        <h2>Task Title: {this.state.task.title}</h2>
        <h3>Task Materials: {this.state.task.materials}</h3>
        <h3>Task Imporantance: {this.state.task.importance}</h3>
        <div
          style={{
            background: "blue",
            display: "inline-block",
            width: "125px",
            height: "50px",
            color: "white",
            textAlign: "center",
          }}
          onClick={this.handleEditing}
        >
          Edit
        </div>
        <div
          style={{
            background: "red",
            display: "inline-block",
            width: "125px",
            height: "50px",
            color: "white",
            textAlign: "center",
          }}
          onClick={() => this.handleDelete()}
        >
          Delete
        </div>
      </div>
    );
    return (
      <div>
        <div
          className="back-btn"
          style={{ background: "gray", width: "75px", height: "75px" }}
          onClick={this.handleBack}
        >
          Back
        </div>
        {editFields}
      </div>
    );
  }
}

export default TaskExpanded;
