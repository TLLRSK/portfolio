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
  {console.log(location.pathname);}

  // Setting style by location
  let [color, setColor] = useState('');

  // Checking location
  useEffect(() => {
    console.log(`now we are on ${location.pathname}`);
    locationColor(location.pathname);
  },[location.pathname])
  
  // Calling back useState
  let locationColor = (path) => {
    switch(path) {
      case '/' : setColor('color-bg--white--300')
        break;
      case '/hello' : setColor('color-bg--white--100')
        break;
      case '/work' : setColor('color-bg--white--0')
        break;
      case '/contact' : setColor('color-bg--blue--100')
        break;
    }
  }

  return (
    <div className={`app ${color}`}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hello' element={<Hello/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/work/project/*' element={<ProjectTemplate/>} />
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

      <Navbar/>
    </div>
  )
}

export default App
