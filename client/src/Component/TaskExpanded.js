import React, { Component } from "react";
import axios from "axios";
import { config } from "../constants";

class TaskExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      config.url.API_URL + "/api/task/" + this.props.match.params.id
    );
    this.setState({
      task: response.data.data,
    });
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div
          className="back-btn"
          style={{ background: "gray", width: "75px", height: "75px" }}
          onClick={this.handleBack}
        >
          Back
        </div>
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
        >
          Delete
        </div>
      </div>
    );
  }
}

export default TaskExpanded;
