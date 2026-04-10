import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
    console.log(userData);
    
  }
  
  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      return <div key={idx} className='cursor-pointer'>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='relative flex flex-col items-center bg-black overflow-hidden h-screen text-white'>
      {/* <div className='w-full bg-black p-4 sticky top-0'>
      <button 
      className='bg-green-600 text-white mb-3 active:scale-95 px-5 py-2 cursor-pointer rounded'
      onClick={getData}
      >Get Data</button>
      </div> */}
      <div className='p-4 h-[92%] flex flex-wrap gap-5 w-[93.34%] overflow-y-scroll overflow-x-hidden mt-3'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4 shadow-2xl shadow-amber-200 w-full h-[8%]'>
        <button 
        style={{opacity: index === 1 ? 0.5 : 1, cursor: index === 1 ? 'not-allowed' : 'pointer'}}
        onClick={() => {
          if(index > 1){
            setIndex(index - 1)
            setUserData([])
          }
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={() => {
            setIndex(index + 1)
            setUserData([])
        }} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App