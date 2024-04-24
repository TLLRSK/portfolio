import './SingleProject.scss';
import {SingleProjectAttList, SingleProjectLinksList} from '../../../public';

const SingleProject = ({project}) => {

    const {index, title, date, type, description, techs, links} = project;
    
    return <>
        <article className='single-project'>

            <header className="single-project__header">

                <div className="single-project__header-row">

                    <span className="index">{`${index} )`}</span>
                    <h3 className="title">{title}</h3>

                </div>

                <div className="single-project__header-row">

                    <span className='date'>{date}</span>
                    <p className='type'>{type}</p>

                </div>
            </header>

            <main className="single-project__main">

                <div className='single-project-description'>

                    <p className='description'>{description}</p>

                </div>

                <div className='single-project-attributes'>

                    <div className='single-project-attribute'>

                        <h5 className='list-title'>Techs</h5>
                        <SingleProjectAttList list={techs}/>

                    </div>

                </div>

                <SingleProjectLinksList list={links}/>

            </main>

        </article>
    </>
}

export default SingleProject;