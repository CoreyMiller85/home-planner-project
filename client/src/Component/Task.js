import React from 'react'
import {useHistory} from 'react-router'

const Task = (props) => {
  const history = useHistory();

 const handleClick = (id) => {
    history.push("/api/task/" + id)
  }


  return (
    <div className="task-div" onClick={() => handleClick(props.data._id)} >
      <h1 className="task-title">{props.data.title}</h1>
      <p>{props.data.materials}</p> 
      <p>{props.data.importance}</p> 


    </div>
  )
}

export default Task