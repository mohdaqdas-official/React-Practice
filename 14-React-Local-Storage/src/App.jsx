import React from 'react'

const App = () => {
  const user = {
    username: 'Mohd Akdas Ansari',
    age:19,
    city: 'Chandigarh',
  }

  const users = JSON.stringify(localStorage.getItem('user'))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)

  localStorage.setItem('user', 'Mohd')
  localStorage.getItem('user')
  localStorage.removeItem('user')
  return (
    <div>App</div>
  )
}

export default App