import { Link } from 'react-router-dom';
import './HeaderSection.scss';
import { usePageNavigationContext } from '../../../contexts/PageNavigationContext';
import useNavbar from '../../../hooks/useNavbar';

const HeaderSection = (props) => {
    
    const {navigateTo} = useNavbar();
    let {sectionIndex, sectionName} = props;

    const home = {
        index: -1,
        path: '/'
    }
   
    return <header className="section__header">

        <Link to={home.path} className={`link--to-home link section__header-item`} onClick={(e) => navigateTo(e,home)}>
            <span className='link-text'>PJ</span>
        </Link>

        <span className='section__header-item section-index'>{sectionIndex}</span>

        <h2 className='section__header-item section-name'>{sectionName}</h2>

    </header>
}

export default HeaderSection;

