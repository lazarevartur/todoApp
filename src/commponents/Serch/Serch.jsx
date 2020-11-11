import React, { Component } from 'react'

class Serch extends Component {
  state = {
    lable: '',
  }
  onChangeTitle = (e) => {
    const value = e.target.value
    this.setState(() => ({ lable: value }))
    this.props.serchItem(value)
  }
  render() {
    return (
      <div>
        <input
          onChange={this.onChangeTitle}
          placeholder="type to search"
          type="text"
          className="form-control search-input"
        />
      </div>
    )
  }
}

export default Serch
