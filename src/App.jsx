import './scss/style.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/home/Home'
import Hello from './views/hello/Hello'
import Work from './views/work/Work'
import Contact from './views/contact/Contact'
import ProjectTemplate from './views/projects/projectTemplate/ProjectTemplate'
import { useEffect, useState } from 'react'
import Navbar from './components/navbars/navbar/Navbar'

function App() {

  // Managing location
  let location = useLocation();

  // Setting style by location
  let [bgColor, setBgColor] = useState('');
  let [color, setColor] = useState('');

  // Checking location
  useEffect(() => {
    return locationColor(location.pathname);
  },[location.pathname])
  
  // Calling back setBgColor
  let locationColor = (path) => {
    if (path === '/') {
        setBgColor('color-bg--green');
        setColor('color--white');
    } else if (path === '/hello') {
        setBgColor('color-bg--white');
        setColor('color--green');
    } else if (path === '/work') {
      setBgColor('color-bg--white');
      setColor('color--black');
    } else if (path.startsWith('/work/project/')) {
      setBgColor('color-bg--white');
      setColor('color--black');
    } else if (path === '/contact') {
        setBgColor('color-bg--black');
        setColor('color--white');
    }
}

  return (
    <div className={`app ${bgColor} ${color}`}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hello' element={<Hello/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/work/project/*' element={<ProjectTemplate/>} />
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      {location.pathname.includes('/work/project/') ? console.log('hello') : <Navbar/>}
    </div>
  )
}

export default App
