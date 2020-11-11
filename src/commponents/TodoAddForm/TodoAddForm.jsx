import React, { Component } from 'react'

class TodoAddForm extends Component {
  state = {
    label: '',
  }
  onChangeInput = (e) => {
    this.setState({ label: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label !== '') {
      this.props.addItem(this.state.label)
      this.setState(() => ({ label: '' }))
    }
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.label}
          className="form-control new-todo-label"
          placeholder="what needs to be done?"
          onChange={this.onChangeInput}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    )
  }
}

export default TodoAddForm
