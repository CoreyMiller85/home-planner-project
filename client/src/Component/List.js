import React, { Component } from "react";
import axios from "axios";
import { config } from "../constants";
import Task from "./Task";

class List extends Component {
  state = {
    list: [],
  };

  componentDidMount = async () => {
    const result = await axios.get(config.url.API_URL + "/api/task");
    this.setState({
      list: result.data.data,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <div className="task-list">
          {this.state.list.map((task) => (
            <Task data={task} />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
