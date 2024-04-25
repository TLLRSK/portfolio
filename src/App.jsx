import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'

import { PageNavigationProvider } from './contexts/PageNavigationContext';
import { Contact, Hello, Home, Work, Navbar } from '../public';

function App() {
  return (
      <div className={`app`}>
        <PageNavigationProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/hello' element={<Hello/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>

          <Navbar/>

        </PageNavigationProvider>
      </div>
  )
}

export default App
