import ArrowUpRight from "../Arrows/ArrowUpRight";
import './SingleProject.scss';

const SingleProject = ({project}) => {
    
    return <>
        <article className='single-project'>

            <header className="single-project-header">
                <div className="single-project-title">
                    <div>
                        <h3>{project.title}</h3>
                    </div>
                    <div className="single-project-title-item">
                        <span>{project.index} )</span>
                    </div>
                </div>
                <div className="single-project-subtitle">
                    <div>
                        <span>{project.date}</span>
                    </div>
                    <div>
                        <p>{project.type}</p>
                    </div>
                </div>

                
            </header>

            <main className="single-project-main">
                <div className='single-project-description'>
                    <p>{project.description}</p>
                </div>

                <div className='single-project-attributes'>
                    <div className='single-project-attribute'>
                        <h5>Techs</h5>
                        <ul className='single-project-attribute-list'>
                            {project.techs.map((tech, i) => {
                                return (
                                    <li key={i} className="list-item">
                                        <span className="span">
                                            {i}.
                                        </span>
                                        <p>
                                            {tech}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* <div className='single-project-attribute'>
                        <h5>Roles</h5>
                        <ul className='single-project-attribute-list'>
                            {project.roles.map((role, i) => {
                                return (
                                    <li key={i} className="list-item">
                                        <span className="span">
                                            {i}.
                                        </span>
                                        <p>
                                            {role}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}
                </div>

                <ul className='single-project-links'>
                    {project.links.map((link, i) => {
                        return (
                            <a key={i} href={link.url} className='link link--project single-project-link hover--bg-b'>
                                <span className="span">{link.name}</span>
                                <span className="span--hover">{link.name}</span>
                            </a>
                        )
                    })}
                </ul>
            </main>

        </article>
    </>
}

export default SingleProject;