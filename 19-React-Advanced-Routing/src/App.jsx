import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Woman from './pages/Woman'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />
        <Route path='/product' element={<Product />}>
        <Route path='men' element={<Men />}/>
        <Route path='woman' element={<Woman />}/>    
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App