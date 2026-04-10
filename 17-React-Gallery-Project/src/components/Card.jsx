import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank' className='h-50 w-44'>
        <div className='h-40 w-44 bg-white overflow-hidden rounded-2xl'>
        <img src={props.elem.download_url} alt="img" className='h-full w-full object-cover'/>
        </div>
        <h2 className='text-center font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card