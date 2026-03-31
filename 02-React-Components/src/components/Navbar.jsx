import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h2>I am {props.user} {props.age}</h2>
    </div>
  )
}

export default Navbar