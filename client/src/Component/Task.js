import React from 'react'

const Task = (props) => {
  return (
    <div>
      <h1 className="task-title">{props.data.title}</h1>
      <p>{props.data.materials}</p> 
      <p>{props.data.importance}</p> 

    </div>
  )
}

export default Task