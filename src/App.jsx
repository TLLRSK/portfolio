import './scss/style.scss'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './views/home/Home'
import Hello from './views/hello/Hello'
import Work from './views/work/Work'
import Contact from './views/contact/Contact'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  // Managing location
  let location = useLocation();

  // Setting style by location
  // let [color, setColor] = useState(true);

  // Calling back setBgColor
  // let locationColor = (path) => {
  //   path === '/' ? setColor('grey-200') : setColor('black');
  // }

  // Handling navigation
  const [toSection, setToSection] = useState('');
  const [fromSection, setFromSection] = useState('');
  const [sectionStatus, setSectionStatus] = useState('');

  const navigate = useNavigate();

  const handleFromSection = (toSection) => {
    toSection === 'next' ? setFromSection('prev') : setFromSection('next');
  }
  //
  const handleSectionNavigation = (e,path,toSection) => {
    e.preventDefault();
    setToSection(toSection)
    setTimeout(() => {
      setSectionStatus('inactive')
      navigate(path)
      handleFromSection(toSection);
      setToSection('')
    },200)
  }

  // Checking location
  useEffect(() => {
    // setFromSection('')
    setTimeout(() => {
      setFromSection('')
    },100)
    setTimeout(() => {
      setSectionStatus('active')
    },300)
    // return locationColor(location.pathname);
  },[location])

  return (
    <div 
      className={`app ${sectionStatus}`}>

      <Routes>
        <Route path='/' element={<Home toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus}/>}></Route>
        <Route path='/hello' element={<Hello toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
        <Route path='/work' element={<Work toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
        <Route path='/contact' element={<Contact toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
      </Routes>

      <Navbar setToSection={setToSection} handleSectionNavigation={handleSectionNavigation}/>

    </div>
  )
}

export default App
