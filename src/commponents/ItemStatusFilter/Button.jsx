import React from 'react'

const Button = ({ label, className, click }) => {
  return (
    <button type="button" className={`btn ${className}`} onClick={click}>
      {label}
    </button>
  )
}

export default Button
