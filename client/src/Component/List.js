import React, {Component} from 'react'
import axios from 'axios'
import {config} from '../constants'

class List extends Component {
  state = {
    list: []
  }


  componentDidMount = async () => {
    const result = await axios.get(config.url.API_URL + '/api/task');
    this.setState({
      list: result.data.data
    })

  }

  render() {
    return (
    <div>
      <h1>Hello world</h1>
      {this.state.list.map(task => (
        <li key={task._id}>{task.title}</li>
      ))}
             </div>
      )
    }
}

export default List;