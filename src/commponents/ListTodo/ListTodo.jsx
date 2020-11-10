import React from 'react'
import ListTodoItem from '../ListTodoItem'
import './ListTodo.css'

const ListTodo = ({ todos, onDeleted }) => {
  const elements = todos.map(({ id, ...todo }) => {
    return (
      <li key={id} className="list-group-item">
        <ListTodoItem {...todo} onDeletedClick={() => onDeleted(id)} />
      </li>
    )
  })
  return <ul className="list-group todo-list">{elements}</ul>
}

export default ListTodo
