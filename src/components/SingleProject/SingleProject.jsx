import './SingleProject.scss';

const SingleProject = ({project}) => {
    
    return <>
        <article className='single-project'>

            <header className="single-project__header">
                <div className="single-project__header-row">
                    <span className="index">{project.index} )</span>
                    <h3 className="title">{project.title}</h3>
                </div>
                <div className="single-project__header-row">
                    <span className='date'>{project.date}</span>
                    <p className='type'>{project.type}</p>
                </div>
            </header>

            <main className="single-project__main">
                <div className='single-project-description'>
                    <p className='description'>{project.description}</p>
                </div>

                <div className='single-project-attributes'>
                    <div className='single-project-attribute'>
                        <h5 className='list-title'>Techs</h5>
                        <ul className='single-project-attribute-list'>
                            {project.techs.map((tech, i) => {
                                return (
                                    <li key={i} className="list-item">
                                        <span className='index'>{`${i}.`}</span>
                                        <p className='tech'>{tech}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <ul className='single-project-links'>
                    {project.links.map((link, i) => {
                        return (
                            <a key={i} href={link.url} className='link link--project single-project-link hover--bg-b'>
                                <span className='link-text'>{link.name}</span>
                                <span className="link-text--hover">{link.name}</span>
                            </a>
                        )
                    })}
                </ul>
            </main>

        </article>
    </>
}

export default SingleProject;