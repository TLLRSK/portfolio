import './Contact.scss'
import {HeaderSection, ContactLinksList} from '../../../public';
import {usePageNavigationContext} from '../../contexts/PageNavigationContext';

const Contact = () => {
    const {sectionTransition} = usePageNavigationContext();
    
    return (
        <section className={`contact ${sectionTransition}`}>

            <article className='contact__content'>

                <HeaderSection sectionIndex={"3"} sectionName={"C"}/>

                <main className='contact__main'>

                    <div className='contact__subtitle'>
                        <p className='text'>Let&apos;s</p>
                    </div>

                    <ContactLinksList/>

                    <div className='contact__bottom-row'>
                        <p className='text'>©2024</p>
                        <p className='text'>PJGV</p>
                    </div>

                </main>

            </article>
            
        </section>
    )
}

export default Contact;