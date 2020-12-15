import React, { Component } from "react";
import axios from "axios";
import { config } from "../constants";
import Task from "./Task";

class List extends Component {
  state = {
    list: [],
  };

  componentDidMount = async () => {
    const result = await axios.get(config.API_URL + "/api/task");

    this.setState({
      list: result.data.data,
    });
  };

  render() {
    const tasks = this.state.list.map((item) => <Task data={item} />);

    return (
      <div>
        <div className="task-list">{tasks}</div>
      </div>
    );
  }
}

export default List;
