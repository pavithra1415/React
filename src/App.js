import {useState} from 'react'
// import Student from './Student'
// import List from './List'
// import Input from './Input'
// import Car from './Car'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
function App(){  
      <BrowserRouter>
       <Navigation/>
       <Routes>
          <Route path="/"element={<Home/}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about"  element={<About/>}/>
       </Routes>
      </BrowserRouter>
  )
}
export default App