import React from 'react'

class ListTodoItem extends React.Component {
  render() {
    const {
      label,
      important,
      done,
      onDoneClick,
      onDeletedClick,
      onImportantClick,
    } = this.props
    const style = {
      color: important ? 'steelBlue' : '',
      fontWeight: important ? 'bold' : 'normal',
    }
    const classNames = `todo-list-item ${done ? 'done' : ''}`
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={onDoneClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeletedClick}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}

export default ListTodoItem
