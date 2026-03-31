import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {

  let user = 'Aahil'
  let age = 19

  return (
    <div>
      <h1>Hi Guys, I am {user}.</h1>
      <h2>Hi Guys, I am {age} years old.</h2>
      <Card />
      <Navbar user= "Mohd Akdas" age= {19}/>
    </div>
  )
}

export default App