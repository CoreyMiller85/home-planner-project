import React, { Component } from 'react'
import axios from 'axios'
import { config } from "../constants";

class TaskExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
  }

  componentDidMount = async () => {
    const response = await axios.get(config.url.API_URL + "/api/task/" + this.props.match.params.id)
    this.setState({
      task: response.data.data
    })
  }
  render() {

    return (
      <div>
      <h2>Task Title: {this.state.task.title}</h2>
    </div>
  )
}
}

export default TaskExpanded