import React from 'react'

const Navbar = () => {
  return (
    <div id='Navbar' className='backdrop-blur-[7px] sticky top-0 z-100 bg-[rgba(255,255,255,0.54)] flex items-center justify-between py-8 px-18'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full'>Target Audience</h4>
        <button className='bg-gray-200 uppercase px-6 py-2 rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar