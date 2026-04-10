// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)
//   useEffect(function(){
//     console.log('useEffect is running...');
    
//   },[num])
//   return (
//     <div>
//       <h1>num is {num}</h1>
//       <h1>num2 is {num2}</h1>
//       <button 
//       onMouseEnter={
//         ()=>{
//         setNum2(num2+10)
//       }}
//       onMouseLeave={()=>{
//         setNum(num+1)
//       }}>Hover</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const aChanging = () => {
    console.log('A ki value change ho gayi');
  }
  const bChanging = () => {
    console.log('B ki value change ho gayi');
  }
  useEffect(() => {
    aChanging()
    console.log('useEffect is Running...');
  },[a])
  useEffect(() => {
    bChanging()
    console.log('useEffect is Running...');
  },[b])
  
  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a+1)
      }}>Change A</button>
      <button onClick={() => {
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App