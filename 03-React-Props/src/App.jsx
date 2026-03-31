import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card  user="Akdas" age={19} img="https://images.unsplash.com/photo-1769863467291-23cf7902f686?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card  user="Sadaf" age={13} img="https://images.unsplash.com/photo-1742712608977-4f47f57c6093?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card  user="Aahil" age={11} img="https://images.unsplash.com/photo-1763198302194-86616d1cc75a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App