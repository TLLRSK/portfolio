import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import './scss/style.scss'
import Home from './views/home/Home'
import Hello from './views/hello/Hello'
import Work from './views/work/Work'
import Contact from './views/contact/Contact'
import ProjectTemplate from './views/projects/projectTemplate/ProjectTemplate'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hello' element={<Hello/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/work/project' element={<ProjectTemplate/>}></Route>
        
      </Routes>

      <Navbar/>
    </>
  )
}

export default App
