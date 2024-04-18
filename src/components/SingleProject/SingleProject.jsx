import ArrowUpRight from "../Arrows/ArrowUpRight";
import './SingleProject.scss';

const SingleProject = ({project}) => {

    
    

    return <>
        <article className='single-project'>

            <header className="single-project-header">
                <div className="single-project-title">
                    <div className="single-project-title-item">
                        <h3 className='single-project-text'>{project.title}</h3>
                    </div>
                    <div className="single-project-title-item">
                        <span className='single-project-text'>{project.index} )</span>
                    </div>
                </div>
                <div className='single-project-image'>
                    <img src="https://via.placeholder.com/500" alt="" className="img--project" />
                </div>
                <div className="single-project-subtitle">
                    <div className="single-project-subtitle-item">
                        <span className='single-project-text'>{project.date}</span>
                    </div>
                    <div className="single-project-subtitle-item">
                        <p className='single-project-text'>{project.type}</p>
                    </div>
                </div>

                
            </header>

            <main className="single-project-main">
                <div className='single-project-description'>
                    <p className='single-project-text'>{project.description}</p>
                </div>

                <div className='single-project-attributes'>
                    <div className='single-project-attribute'>
                        <h5 className='single-project-subtitle'>Techs</h5>
                        <ul className='single-project-attribute-list'>
                            {project.techs.map((tech, i) => {
                                return (
                                    <li key={i} className="list-item">
                                        <span className='single-project-text'>
                                            {i}.
                                        </span>
                                        <p className='single-project-text'>
                                            {tech}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='single-project-attribute'>
                        <h5 className='single-project-subtitle'>Roles</h5>
                        <ul className='single-project-attribute-list'>
                            {project.roles.map((role, i) => {
                                return (
                                    <li key={i} className="list-item">
                                        <span className='single-project-text'>
                                            {i}.
                                        </span>
                                        <p className='single-project-text'>
                                            {role}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <ul className='single-project-links'>
                    {project.links.map((link, i) => {
                        return (
                            <a key={i} href={link.url} className='link link--project single-project-link'>
                                {link.name}
                            </a>
                        )
                    })}
                </ul>
            </main>

        </article>
    </>
}

export default SingleProject;