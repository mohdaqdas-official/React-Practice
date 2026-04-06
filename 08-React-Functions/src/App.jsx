import React from 'react'

const App = () => {

  function ScrollValue(val){
    if(val > 0){
      console.log("Down Scroll");
    } else {
      console.log("Up Scroll");
    }
  }

  return (
    <div onWheel={function(elem){
        ScrollValue(elem.deltaY)
    }}>
      <div className='h-[100vh] w-full bg-[#111]'/>
      <div className='h-[100vh] w-full bg-[#222]'/>
      <div className='h-[100vh] w-full bg-[#333]'/>
    </div>
  )
}

export default App