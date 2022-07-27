import React from 'react'

const Header = ({ text, bgColor, textColor }) => {
  const headerstyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerstyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
