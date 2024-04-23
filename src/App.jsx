import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import Hello from './views/hello/Hello'
import Work from './views/work/Work'
import Contact from './views/contact/Contact'
import Navbar from './components/Navbar/Navbar'
import usePageTransition from './hooks/usePageTransition'

function App() {

  const {toSection, setToSection, fromSection, handleSectionNavigation, sectionStatus} = usePageTransition();

  return (
    <div 
      className={`app ${sectionStatus}`}>

      <Routes>
        <Route path='/' element={<Home toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus}/>}></Route>
        <Route path='/hello' element={<Hello toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
        <Route path='/work/*' element={<Work toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation} location={location}/>}></Route>
        <Route path='/contact' element={<Contact toSection={toSection} fromSection={fromSection} sectionStatus={sectionStatus} handleSectionNavigation={handleSectionNavigation}/>}></Route>
      </Routes>

      <Navbar setToSection={setToSection} handleSectionNavigation={handleSectionNavigation}/>

    </div>
  )
}

export default App
