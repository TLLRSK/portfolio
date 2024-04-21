import './Hello.scss';
import HeaderSection from '../../components/Headers/HeaderSection/HeaderSection';
import { useState } from 'react';

export default function Hello(props) {

    const {toSection, fromSection, sectionStatus, handleSectionNavigation} = props;
 
    const [pageToggle, setPageToggle] = useState(false);

    const description = [
        {
            char: "a",
            text : ["This is", "Pedro"]
        },
        {
            char: "b",
            text : ["Junior", "Frontend Dev"]
        },
        {
            char: "c",
            text : ["Visual Artist", "for +10 years"]
        },
        {
            char: "d",
            text : ["Based in", "Valencia, Esp"]
        }
    ]

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
        `}>

        <HeaderSection handleSectionNavigation={handleSectionNavigation}/>

        <main className={`hello__main sliding-main`}>
            
            {/* <div className={`hello__page-1 sliding-page-1 ${pageToggle ? "hidden" : ""}`}> */}
            <div className={`hello__page-1 sliding-page-1`}>
                <HelloDescription description={description} setPageToggle={setPageToggle}/>
                
            </div>

            <div className={`hello__page-2 sliding-page-2 ${!pageToggle ?  "hidden" : ""}`}>
                {
                    lists.map(list => {
                        return (
                            <HelloListBox key={list.title} list={list} setPageToggle={setPageToggle}/>
                        )
                    })
                }
                
            </div>
            <div className={`btn--hello-toggler next${pageToggle ? " hidden" : ""}`}>
                <button className={`btn`} onClick={() => setPageToggle(true)}>
                    <span className="burger"></span>
                </button>
            </div>
            <div className={`btn--hello-toggler prev ${!pageToggle ? " hidden" : ""}`}>
                <button className={`btn`} onClick={() => setPageToggle(false)}>
                    <span className="burger"></span>
                </button>
            </div>
        </main>
    </section>
}

const HelloDescription = ({description}) => {
    return (
        <ul className="hello__description-grid">

            {description.map((e,i) => {
                return (
                    <li key={i} className='hello__description-grid-item'>
                        <span>{e.char} )</span>
                        <p >{e.text[0]}</p>
                        <p>{e.text[1]}</p>
                    </li>
                )
            })}
        </ul>
    )
}
const HelloListBox = ({list}) => {
    return (
        <div className="hello__list-box">
            <h3 className="hello__list-title">{list.title} )</h3>

            <ul className={`hello__list hello__list--${list.title}`}>
                {list.items.map((item, i) => {
                    return (
                        <li key={i} className="hello__list-item">
                            <span>{i} .</span>
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}