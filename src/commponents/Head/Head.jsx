import React from 'react'

const Head = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {todo} more to do, {done} done
      </h2>
    </div>
  )
}

export default Head
