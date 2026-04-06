import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={function(){setNum(0)}}>AC</button>
      <button onClick={function(){setNum(num + 1)}}>Increase</button>
      <button onClick={function(){setNum(num - 1)}}>Decrease</button>
      <button onClick={function(){setNum(num + 5)}}>Increase 5</button>
    </div>
  )
}

export default App