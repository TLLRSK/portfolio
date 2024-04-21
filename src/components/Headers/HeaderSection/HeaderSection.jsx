import { Link } from 'react-router-dom';
import './HeaderSection.scss';

const HeaderSection = (props) => {
    let {handleSectionNavigation, location} = props;
   
    return <header className="section__header">
        <Link 
            to='/' 
            className={`link--to-home link`}
            onClick={(e) => handleSectionNavigation(e,'/','prev')}>
            <p className='link--to-home-paragraph'>PJ</p>
        </Link>
    </header>
}

export default HeaderSection;

