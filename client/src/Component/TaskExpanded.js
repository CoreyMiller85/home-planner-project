import React, { Component } from "react";
import axios from "axios";
import { config } from "../constants";

class TaskExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      title: "",
      materials: "",
      importance: "",
      isEditing: false,
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      config.url.API_URL + "/api/task/" + this.props.match.params.id
    );
    this.setState({
      task: response.data.data,
      title: response.data.data.title,
      materials: response.data.data.materials,
      importance: response.data.data.importance,
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
        <input
          type="text"
          name="materials"
          placeholder={this.state.task.materials}
          value={this.state.materials}
          onChange={(e) => this.handleChange(e)}
        />
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
          onClick={this.handleEditing}
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
