import { useEffect, useState } from "react";
import ArrowUpRight from "../Arrows/ArrowUpRight";
import './SingleProject.scss';

const SingleProject = ({project}) => {

    useEffect(() => {
        
    })
    return <>
        <article className='single-project'>
            <div className='single-project-image'>
                <div style={{backgroundImage: `url("https://via.placeholder.com/500")`}} alt="" className="img--project" />
            </div>
            <main className="single-project-main">
                <div className='single-project-grid--2'>
                    <div className='grid-item--row'>
                        <p>{project.date}</p>
                    </div>

                    <div className='grid-item--row'>
                        <p>{project.type}</p>
                    </div>
                </div>

                <div className='single-project-description'>
                    <p>{project.description}</p>
                </div>

                <div className='single-project-grid--2'>
                    <div className='grid-item--column'>
                        <h5 className='single-project-attribute'>Techs</h5>
                        <p className='single-project-attributes'>
                            {project.techs}
                        </p>
                    </div>

                    <div className='grid-item--column'>
                        <h5 className='single-project-attribute'>Roles</h5>
                        <p className='single-project-attributes'>
                            {project.roles}
                        </p>
                    </div>
                </div>
                <ul className='single-project-links'>
                    {project.links.map((link, i) => {
                        return (
                            <a key={i} href={link.url} className='link link--project'>
                                <p>{link.name}</p>
                            </a>
                        )
                    })}
                </ul>
            </main>
        </article>
    </>
}

export default SingleProject;