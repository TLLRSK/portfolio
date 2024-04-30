import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'

import { PageNavigationProvider } from './contexts/PageNavigationContext';
import { Contact, Hello, Home, Work, Navbar } from '../public';
import WorkTogglerProvider from './contexts/WorkTogglerContext';

function App() {
  return (
      <div className={`app`}>
        <PageNavigationProvider>
        <WorkTogglerProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hello' element={<Hello/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          
            <Navbar/>
        </WorkTogglerProvider>
        </PageNavigationProvider>
      </div>
  )
}

export default App
