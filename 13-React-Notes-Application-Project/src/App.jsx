import React, { createElement, useState } from 'react'
import NotesCard from './components/NotesCard'

const App = () => {

  const [note, setNote] = useState({title: '', Description: ''})
  const [error, setError] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (note.title === '' && note.Description === '') {
      setError('! Note Cannot be Empty. Please Type Something')
      console.log('! Note Cannot be Empty. Please Type Something');
      
      return
    }

    const copyTask = [...task]
    copyTask.push({title: note.title, Description: note.Description})

    setTask(copyTask)

    console.log();
    
    setError('')
    setNote({...note, title: '', Description: ''})
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex font-medium lg:w-1/4 w-full flex-col gap-5 p-10 items-start' onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h1 className='font-bold text-2xl'>Add Notes</h1>
          <input 
          className='px-5 py-2 border-2 outline-none w-full rounded'
          type="text" 
          placeholder='Enter Task Heading'
          value={note.title}
          onChange={(e) => {
            setNote({ ...note, title: e.target.value });
          }}
          />
          <textarea 
          className='px-5 h-32 py-2 border-2 w-full outline-none rounded'
          placeholder='Enter Details'  
          value={note.Description}
          onChange={(e) => {
            setNote({ ...note, Description: e.target.value });
          }}
          ></textarea>
          <button className='bg-white active:bg-gray-300 active:scale-95 text-black px-5 py-2 rounded cursor-pointer w-full outline-none'>Add Notes</button>
          <p className='bg-red-800 w-full px-2 py-1'>{error}</p>
      </form>
      <div className='flex flex-col gap-6 p-10 lg:w-3/4 lg: w-full lg:border-l-2 border-t-2'>
        <h1 className='font-bold text-2xl'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 h-full overflow-auto'>
          {/* {task.map(function(){
            return <div className='h-42 w-42 p-1 rounded-2xl bg-white'></div>
          })} */}
        </div>
      </div>
    </div>
  )
}

export default App