import React, {Component} from 'react'
import axios from 'axios'

class List extends Component {
  state = {
    list: []
  }

  componentDidMount = async () => {
    const result = await axios.get('/api/task');
    this.setState({
      list: result.data
    })
    
  }

  render() {
    return (
      <h1> This is the list component</h1>
    )
  }
}

export default List;