import { useState } from 'react';
import { usePageNavigationContext } from '../../contexts/PageNavigationContext';
import { BtnHelloPageToggler, HeaderSection, HelloDescription, HelloListBox, helloDescription, helloLists } from '../../../public';
import './Hello.scss';

export default function Hello() {

    const {sectionTransition} = usePageNavigationContext();
 
    const [pageToggle, setPageToggle] = useState(false);

    const description = helloDescription;
    const lists = helloLists;

    return (
        <section className={`hello ${sectionTransition}`}>

            <HeaderSection sectionIndex={"1"} sectionName={"H"}/>

            <main className={`hello__main sliding-main`}>
                
                <div className={`hello__page-1 sliding-page-1`}>
                    <HelloDescription description={description} setPageToggle={setPageToggle}/>
                </div>

                <div className={`hello__page-2 sliding-page-2 ${!pageToggle ?  "hidden" : ""}`}>
                    {lists.map(list => {
                        return <HelloListBox key={list.title} list={list} setPageToggle={setPageToggle}/>
                    })}
                </div>

                <BtnHelloPageToggler to={"next"} pageToggle={pageToggle} setPageToggle={setPageToggle}/>
                <BtnHelloPageToggler to={"prev"} pageToggle={pageToggle} setPageToggle={setPageToggle}/>
                
            </main>

        </section>
    )
}