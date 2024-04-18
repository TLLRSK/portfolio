import { Link } from 'react-router-dom';
import './HeaderSection.scss';
import { useEffect, useState } from 'react';
import ArrowBackward from '../../Arrows/ArrowBackward';

import {useSetOnProject} from '../../../../public/hooks.js';

const HeaderSection = (props) => {
    let {handleSectionNavigation, location} = props;
    const {onProject} = useSetOnProject();

   
    return <header className="section__header">
        <Link 
            to='/' 
            className={`link--to-home link`}
            onClick={(e) => handleSectionNavigation(e,'/','prev')}>
            <p className='link--to-home-paragraph'>PJ</p>
        </Link>

        {onProject && (
            <LinkToWork/>
        )}
    </header>
}

export default HeaderSection;


const LinkToWork = () => {
    return <Link to={"/work"} className='link link--to-work'>
        <ArrowBackward className="arrow color--black"/>
    </Link>
}

