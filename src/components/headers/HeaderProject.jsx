import { Link } from 'react-router-dom';
import './HeaderProject.scss'

export default function HeaderProject(props) {
    let {color} = props;
    return <header className="project__header">
        <div className={`project__header-block--left color--${color}`}>
            <div className={`project__header-square color-bg--${color}`}></div>
            <h2 className='project__header-title'>
                Project
            </h2>
        </div>

        

        <div className="project__header-block--right">
            <Link to='/' className="link project__header-home-btn">
                <p>PJ</p>
            </Link>
        </div>
    </header>
}