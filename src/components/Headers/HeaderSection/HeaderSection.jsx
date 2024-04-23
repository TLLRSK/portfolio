import { Link } from 'react-router-dom';
import './HeaderSection.scss';

const HeaderSection = (props) => {
    let {handleSectionNavigation, sectionIndex, sectionName} = props;
   
    return <header className="section__header">
        <Link 
            to='/' 
            className={`link--to-home link section__header-item`}
            onClick={(e) => handleSectionNavigation(e,'/','prev')}>
            <p className='link-text'>PJ</p>
        </Link>
        <span className='section__header-item section-index'>{sectionIndex}</span>
        <h2 className='section__header-item section-name'>{sectionName}</h2>
    </header>
}

export default HeaderSection;

