import React from 'react'

const App = () => {

  function inputFocus(){
    console.log("Input Focused");
  }

  function inputChanging(){
    console.log("Input value Changed");
  }
  return (
    <div>
      <input onChange={function(elem){
        console.log('value: ',elem.target.value, 'Length: ', elem.target.value.length )
      }}
      type="text"
      placeholder='Enter Something' 
      />
    </div>
  )
}

export default App