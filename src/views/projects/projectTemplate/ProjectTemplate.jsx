import {Routes, Route, useLocation } from "react-router-dom";
import './ProjectTemplate.scss';
import HeaderProject from "../../../components/headers/HeaderProject";
import Aboutme from "../aboutme/Aboutme";
import Todoapp from "../todoapp/Todoapp";
import Robbertas from "../robbertas/Robbertas";
import Quoteapp from "../quoteapp/Quoteapp";
import { useEffect, useState } from "react";
import NavbarProjects from "../../../components/navbars/navbarProjects/NavbarProjects";

export default function ProjectTemplate() {
    // Declaring location
    let location = useLocation();

    // Setting style by location
    let [color, setColor] = useState('');

    // Checking location
    useEffect(() => {
      console.log(`now we are on ${location.pathname}`);
      locationColor(location.pathname);
    },[location])

    // Calling back useState
    let locationColor = (path) => {
      switch(path) {
        case '/work/project/aboutme' : setColor('green')
          break;
        case '/work/project/todoapp' : setColor('blue--0')
          break;
        case '/work/project/quoteapp' : setColor('black--0')
          break;
        case '/work/project/robbertas' : setColor('red')
          break;
      }
    }

    return <section className='project'>
        <article className='project__content'>
            <HeaderProject color={color}/>
            <Routes>
                <Route path='/aboutme' element={<Aboutme/>}></Route>
                <Route path='/todoapp' element={<Todoapp/>}></Route>
                <Route path='/quoteapp' element={<Quoteapp/>}></Route>
                <Route path='/robbertas' element={<Robbertas/>}></Route>
            </Routes>
        </article>
        <NavbarProjects/>
    </section>
}