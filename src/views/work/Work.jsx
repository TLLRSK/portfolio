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

            <HeaderSection section={'Work'} color={'black'}/>
            
            <main className="work__main">
                <div className="work__main-block--top">
                    <p>PICK A PROJECT</p>
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