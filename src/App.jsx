import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'

import { usePageNavigationContext } from './contexts/PageNavigationContext';
import { Contact, Hello, Home, Work, Navbar } from '../public';

function App() {
  const { sectionStatus } = usePageNavigationContext();

  return (
      <div className={`app ${sectionStatus}`}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/hello' element={<Hello/>}></Route>
          <Route path='/work/*' element={<Work/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

        <Navbar/>
      </div>
  )
}

export default App
