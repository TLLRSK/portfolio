import HeaderSection from "../../components/headers/headerSection";
import './Work.scss';
import { Link } from "react-router-dom";

export default function Work() {
    return <section className="work">
        <article className="work__content">
            <HeaderSection section={'Work'} color={'color--black--0'}/>
            <main className="work__main">
                <div className="work__main-block--top">
                    <div className="work__filter">
                        <input type="radio" className="work__filter-toggler"/>
                        <label id='all' name='projects' className='btn--work-filter'>
                            <p>ALL</p>
                            <div className="work__filter-selected"></div>
                        </label>

                        <input type="radio" className="work__filter-toggler"/>
                        <label id='all' name='projects' className='btn--work-filter'>
                            <p>WEB</p>
                            <div className="work__filter-selected"></div>
                        </label>

                        <input type="radio" className="work__filter-toggler"/>
                        <label id='all' name='projects' className='btn--work-filter'>
                            <p>APP</p>
                            <div className="work__filter-selected"></div>
                        </label>
                    </div>
                </div>

                <div className="work__projects">
                    <Link to='project/aboutme' className="work__project-tab link">
                        <p className="work__project-title">ABOUTME</p>
                        <div className="work__project-arrow"></div>
                    </Link>
                    <Link to='project/todoapp' className="work__project-tab link">
                        <p className="work__project-title">TODOAPP</p>
                        <div className="work__project-arrow"></div>
                    </Link>
                    <Link to='project/quoteapp' className="work__project-tab link">
                        <p className="work__project-title">QUOTEAPP</p>
                        <div className="work__project-arrow"></div>
                    </Link>
                    <Link to='project/robbertas' className="work__project-tab link">
                        <p className="work__project-title">ROBBERTAS</p>
                        <div className="work__project-arrow"></div>
                    </Link>
                </div>
            </main>
        </article>
    </section>
}