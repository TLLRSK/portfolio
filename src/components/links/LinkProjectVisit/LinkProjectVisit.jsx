import { Link } from "react-router-dom";
import './LinkProjectVisit.scss';
import ArrowForward from "../../arrows/ArrowForward";

export default function LinkProjectVisit(props) {
    let {color} = props;

    return <>
        <div className='project__visit'>
            <Link className='link--project-visit link'>
                <p>VISIT</p>
                <div className={`arrow--project-visit ${color}`}>
                    <ArrowForward/>
                </div>
            </Link>
        </div>
    </>
}