import React from 'react'

const NotesCard = (props) => {
  return (
    <div idx={props.id} className='flex flex-col justify-between h-52 w-40 bg-cover object-fill p-5 rounded-xl text-black bg-[#ffffff0e] shadow-inner shadow-gray-200'>
      <div>
        <h3 className='leading-tight mb-3 font-bold break-all text-lg text-white'>{props.title}</h3>
        <p className='leading-tight items-start justify-start break-all text-sm font-semibold text-gray-500'>{props.Description}</p>
      </div>
      <button onClick={function(){
        props.onDelete(props.idx)
      }} className='bg-red-500 text-xl py-1 font-medium text-white rounded-xl outline-none border-none cursor-pointer active:scale-95 hover:shadow-white shadow'>Delete</button>
    </div>
  )
}

export default NotesCard