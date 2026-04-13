import { Link } from 'react-router-dom'
    
    const Navbar = () => {
      return (
        <div className='flex items-center justify-between py-6 px-10 bg-cyan-900'>
            <Link to='/' ><h2 className='text-2xl font-bold'>Sheriyans</h2></Link>
            <div className='flex gap-8'>
                <Link to='/' className='text-lg font-medium'>Home</Link>
                <Link to='/about' className='text-lg font-medium'>About</Link>
                <Link to='/courses' className='text-lg font-medium'>Courses</Link>
                <Link to='/product' className='text-lg font-medium'>Product</Link>
            </div>
        </div>
      )
    }
    
    export default Navbar