import axios from "axios";
import React, { Component } from "react";
import { config } from "../constants";

export default class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      materials: "",
      importance: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(config.url.API_URL + "/api/task", {
      title: this.state.title,
      materials: this.state.materials,
      importance: this.state.importance,
    });
    this.setState({
      title: "",
      materials: "",
      importance: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form>
          <div>
            <label htmlFor="title">Name Of Task: </label>
            <input
              type="text"
              name="title"
              onChange={(e) => this.handleChange(e)}
              value={this.state.title}
            />
          </div>
          <div>
            <label htmlFor="materials">Materials for Task: </label>
            <input
              type="text"
              name="materials"
              onChange={(e) => this.handleChange(e)}
              value={this.state.materials}
            />
          </div>
          <div>
            <label htmlFor="importance">Importance: </label>
            <input
              type="text"
              name="importance"
              onChange={(e) => this.handleChange(e)}
              value={this.state.importance}
            />
          </div>
          <a
            style={{
              display: "inline-block",
              background: "blue",
              width: "100px",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={(e) => this.handleSubmit(e)}
          >
            Button
          </a>
        </form>
      </div>
    );
  }
}
