import './Hello.scss';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';
import { useEffect, useState } from 'react';
import ArrowDown from '../../components/Arrows/ArrowDown';
import ArrowUp from '../../components/Arrows/ArrowUp';


export default function Hello(props) {

    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setPageNumber(1)
        },100)
    },[])

    const lists = [
        {  
            char: "b",
            title: "fields",
            items: ["Web Development", "E-commerce", "UX/UI Design", "Illustration", "2D Animation"]
        },
        {
            char: "c",
            title: "tools",
            items: ["Html", "Sass", "Js", "React", "Typescript", "Php", "Figma", "Wordpress"]
        }
    ];

    return <section className={`hello 
        ${toSection == 'next' ? 'going-to-next' : toSection == 'prev' ? 'going-to-prev' : ''} 
        ${fromSection == 'next' ? 'coming-from-next' : fromSection == 'prev' ? 'coming-from-prev' : ''} 
        ${sectionStatus}
        on-page--${pageNumber === 1 ? '1' : pageNumber === 2 ? '2' : '0'}`}>

        <HeaderSection handleSectionNavigation={handleSectionNavigation}/>

        <main className={`hello__main`}>
            <div className="hello__slider">

                <div className={`hello__page hello__page--1 ${pageNumber === 1 ? 'visible' : 'hidden'}`}>
                    <div className="hello__title">
                        <span className="hello__title-text hello__title-text--page-1 transition-delay--200">A )</span>
                        <h3 className="hello__title-text hello__title-text--page-1 transition-delay--200">HI</h3>
                    </div>

                    <div className="hello__description">
                        <div className="hello__text-block hello__text-block--border overflow--hidden">
                            <p className="hello__description-paragraph transition-delay--200">
                                This is <br/>Pedro
                            </p>

                            <p className="hello__description-paragraph transition-delay--200">
                                Jr Frontend <br/>Dev
                            </p>

                            <img className="hello__description-image" src="https://placehold.jp/150x150.png" alt="Pedro J Gil"/>

                            <p className="hello__description-paragraph transition-delay--200">
                                Visual Artist <br/>for +10 years.
                            </p>

                            <p className="hello__description-paragraph transition-delay--200">
                            Based in <br/>VLC, ESP.
                            </p>

                        </div>
                    </div>
                </div>

                <div className={`hello__page hello__page--2 ${pageNumber === 2 ? 'visible' : 'hidden'}`}>
                    {
                        lists.map(list => {
                            return (
                                <HelloListBox key={list.title} list={list}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className={`hello__page-toggler`}>
                <div className={`hello__page-toggler-row ${pageNumber === 1 ? 'visible' : pageNumber === 0 ? 'visible' : 'hidden'}`}>
                    {pageNumber === 1 ? (
                        <span className="hello__toggler-sign">+</span>
                    ):(
                        <span className="hello__toggler-sign">-</span>
                    )}
                    <button className='btn btn--hello-page-toggler'
                    onClick={() => pageNumber === 1 ? setPageNumber(2) : setPageNumber(1)}>
                        {pageNumber === 1 ? (
                            <div>
                                <ArrowDown className={"arrow arrow--hello-page-toggler--down color--black"}/>
                                <ArrowDown className={"arrow arrow--hello-page-toggler--down-hover color--black"}/>
                            </div>
                        ):(
                            <div>
                                <ArrowUp className={"arrow arrow--hello-page-toggler--up color--black"}/>
                                <ArrowUp className={"arrow arrow--hello-page-toggler--up-hover color--black"}/>
                            </div>
                        )}
                        
                    </button>
                </div>
            </div>
        </main>
    </section>
}

const HelloListBox = ({list}) => {
    const {char, title, items} = list;
    return (
        <div className="hello__list-box">
            <div className="hello__title overflow--hidden">
                <span className="hello__title-text hello__title-text--page-2 transition-delay--200">{char} )</span>
                <h3 className='hello__title-text hello__title-text--page-2 transition-delay--200'>{title}</h3>
            </div>

            <ul className={`hello__list hello__list--${title}`}>
                {items.map((item, i) => {
                    return (
                        <li key={i} className="hello__list-item">
                            <p className='hello__list-paragraph hello__item-text transition-delay--200'>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}