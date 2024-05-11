import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Exp from './pages/Exp';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import "../src/style/app.css"
import ProjectDisplay from './pages/ProjectDisplay';

const App = () => {
  return (
    <div className='App'>
      <Router>
          <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/project' element={<Projects/>} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='/experience' element={<Exp/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
         <Footer/>
      </Router>
    </div>
  )
}

export default App