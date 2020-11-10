import React from 'react'

class ListTodoItem extends React.Component {
  onLabelClick = () => {
    this.setState((state) => {
      return { complete: !state.complete }
    })
  }
  onMarkImportantClick = () => {
    this.setState((state) => {
      return { important: !state.important }
    })
  }

  state = {
    complete: false,
    important: false,
  }

  render() {
    const { label, onDeletedClick } = this.props
    const { complete, important } = this.state
    const style = {
      color: important ? 'steelBlue' : '',
      fontWeight: important ? 'bold' : 'normal',
    }
    const classNames = `todo-list-item ${complete ? 'done' : ''}`
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportantClick}
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
