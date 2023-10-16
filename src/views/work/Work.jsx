import { useEffect, useState } from "react";
import ArrowDownRight from "../../components/arrows/ArrowDownRight";
import HeaderSection from "../../components/headers/headerSection";
import './Work.scss';
import { Link } from "react-router-dom";
import { PROJECTS } from "../../../public/projects";

export default function Work() {
    const projects = PROJECTS;

    //setting selected filter
    const[filter, setFilter] = useState();

    // filtering all by default
    useEffect(()=> {
        setFilter('all');
    },[])
    
    return <section className="work">
        <article className="work__content">

            <HeaderSection section={'Work'} color={'color--black--100'}/>
            
            <main className="work__main">
                <div className="work__main-block--top">
                    <div className="work__filter">

                        <div className={`work__filter-item btn--filter ${filter === 'all' ? 'selected' : ''}`}>
                            <label htmlFor="all" name='projects' className='btn--filter-switch'>
                                <input type="radio" className="btn--filter-toggler" name="filter" id="all" onChange={(e) => {setFilter(e.target.id)}}/>
                                <span className="btn--filter-check"></span>
                                <p>ALL</p>
                            </label>
                        </div>

                        <div className={`work__filter-item btn--filter ${filter === 'web' ? 'selected' : ''}`}>
                            <label htmlFor="web" name='projects' className='btn--filter-switch'>
                                <input type="radio" className="btn--filter-toggler" name="filter" id="web" onChange={(e) => {setFilter(e.target.id)}}/>
                                <span className="btn--filter-check"></span>
                                <p>WEB</p>
                            </label>
                        </div>
                        
                        <div className={`work__filter-item btn--filter ${filter === 'app' ? 'selected' : ''}`}>
                            <label htmlFor="app" name='projects' className='btn--filter-switch'>
                                <input type="radio" className="btn--filter-toggler" name="filter" id="app" onChange={(e) => {setFilter(e.target.id)}}/>
                                <span className="btn--filter-check"></span>
                                <p>APP</p>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="work__projects-grid">

                    {projects.map( (project,index) => (
                        <Link to={`project${project.path}`} key={index} className="work__projects-grid-item link">
                            <span>{project.index}</span>
                            <p className="work__project-title">{project.title}</p>
                            <ArrowDownRight className={"work__projects-grid-arrow"}/>
                        </Link>
                        )
                    )}
                    
                </div>

            </main>
        </article>
    </section>
}