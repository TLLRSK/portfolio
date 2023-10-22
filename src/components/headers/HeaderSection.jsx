import { Link, useNavigate } from 'react-router-dom';
import './HeaderSection.scss';

export default function HeaderSection(props) {
    let {section,color,handleSectionNavigation} = props;
   
    return <header className="section__header">
        <h2 className="section__header-title">
            {section}
        </h2>

        <Link 
            to='/' 
            className={`link--to-home link color--${color}`}
            onClick={(e) => handleSectionNavigation(e,'/','prev')}>
            <p>pj</p>
        </Link>
    </header>
}