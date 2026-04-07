import React, { createElement, useState } from 'react'
import NotesCard from './components/NotesCard'

const App = () => {

  const [note, setNote] = useState({title: '', Description: ''})
  const [error, setError] = useState({Error:'', Style: ''})
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (note.title === '' && note.Description === '') {
      setError({Error: '! Note Cannot be Empty. Please Type Something', Style: 'bg-red-800 w-full px-2 py-1'})
      
      return
    }

    const copyTask = [...task]
    copyTask.push({title: note.title, Description: note.Description})

    setTask(copyTask)
        
    setError('')
    setNote({...note, title: '', Description: ''})
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white overflow-hidden'>
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
          className='px-5 h-32 py-2 border-2 w-full outline-none rounded max-w-md
          min-h-[40px]
          max-h-[160px]
          overflow-y-auto'
          placeholder='Enter Details'  
          value={note.Description}
          
          onChange={(e) => {
            setNote({ ...note, Description: e.target.value });
          }}
          ></textarea>
          <button className='bg-white active:bg-gray-300 active:scale-95 text-black px-5 py-2 rounded cursor-pointer w-full outline-none'>Add Notes</button>
          <p className={error.Style}>{error.Error}</p>
      </form>
      <div className='flex flex-col gap-6 lg:w-3/4 lg: w-full lg:border-l-2 border-t-2 h-full'>
        <h1 className='font-bold text-2xl px-10 pt-10'>Your Notes</h1>
        <div className='flex flex-wrap gap-x-5 gap-y-2 px-10 overflow-y-scroll items-start justify-start overflow-x-hidden h-[45%]'>
          {task.map(function(elem, idx){
            return <NotesCard key={idx} idx={idx} title={elem.title} Description={elem.Description} onDelete={deleteNote} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App