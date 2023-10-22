import './scss/style.scss'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './views/home/Home'
import Hello from './views/hello/Hello'
import Work from './views/work/Work'
import Contact from './views/contact/Contact'
import ProjectTemplate from './views/projects/projectTemplate/ProjectTemplate'
import { useEffect, useState } from 'react'
import Navbar from './components/navbars/Navbar/Navbar'

function App() {
  // Managing location
  let location = useLocation();

  // Setting style by location
  let [color, setColor] = useState('');

  // Calling back setBgColor
  let locationColor = (path) => {
    if (path === '/') {
        setColor('color--white');
    } else if (path === '/hello') {
        setColor('color--green');
    } else if (path === '/work') {
      setColor('color--black');
    } else if (path.startsWith('/work/project/')) {
      setColor('color--black');
    } else if (path === '/contact') {
        setColor('color--white');
    }
  }
  

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
    },300)
  }

  // Checking location
  useEffect(() => {
    console.log(`coming from ${fromSection}`)
    // setFromSection('')
    setTimeout(() => {
      setFromSection('')
      console.log('active')
      setSectionStatus('active')
    },100)
    return locationColor(location.pathname);
  },[location])

  return (
    <div 
      className={`app ${color} 
        ${location.pathname == '/' ? 'on-home' 
        : location.pathname == '/contact' ? 'on-contact' 
        : ''}
        ${sectionStatus}`}>

      <Routes>
        <Route path='/' element={<Home toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus}/>}></Route>
        <Route path='/hello' element={<Hello toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
        <Route path='/work' element={<Work toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
        <Route path='/work/project/*' element={<ProjectTemplate/>} />
        <Route path='/contact' element={<Contact toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
      </Routes>

      {location.pathname.includes('/work/project/') ? '' : <Navbar setToSection={setToSection} handleSectionNavigation={handleSectionNavigation}/>}

    </div>
  )
}

export default App
