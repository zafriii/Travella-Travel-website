import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Plans from './Pages/Plans';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './Pages/Gallery';



function App() {
  

  return (
    <>

        <BrowserRouter>

            <Navbar/>


            <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/plans' element={<Plans/>}/> 
              <Route path='/blogs' element={<Blogs/>}/> 
              

            </Routes>

            <Footer/>

        </BrowserRouter>
    
    </>
  )
}

export default App
