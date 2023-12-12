import { Link } from 'react-router-dom';
import './HeaderSection.scss';

export default function HeaderSection(props) {
    let {section,color,handleSectionNavigation} = props;
   
    return <header className="section__header">
        <Link 
            to='/' 
            className={`link--to-home link color--${color}`}
            onClick={(e) => handleSectionNavigation(e,'/','prev')}>
            <p>PJ</p>
        </Link>
    </header>
}