import { Link } from 'react-router-dom';
import './HeaderSection.scss';

export default function HeaderSection(props) {
    let {section,color} = props;
    return <header className="section__header">
        <h2 className="section__header-title">
            {section}
        </h2>

        <Link to='/' className={`section__header-home-btn link ${color}`}>
            <p>PJ</p>
        </Link>
    </header>
}