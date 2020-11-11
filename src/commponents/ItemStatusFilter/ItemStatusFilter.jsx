import React from 'react'
import Button from './Button'

class ItemStatusFilter extends React.Component {
  state = {
    active: 'All',
  }
  onChangeStatusFilter = (type) => {
    this.setState(() => ({ active: type }))
    this.props.statusFilter(type)
  }
  // btn-outline-secondary btn-info
  render() {
    const buttonType = ['All', 'Active', 'Done']
    const { active } = this.state
    return (
      <div className="btn-group">
        {buttonType.map((type, i) => {
          return (
            <Button
              key={type}
              label={type}
              className={active === type ? 'btn-info' : 'btn-outline-secondary'}
              click={() => this.onChangeStatusFilter(type)}
            />
          )
        })}
      </div>
    )
  }
}

export default ItemStatusFilter
