import { ContactLink, linksList } from "../../../public";

const ContactLinksList = () => {

    const links = linksList;

    return (
        <ul className='contact__links-list'>

            {links.map((link, i) => {
                return (
                    <ContactLink key={i} i={i} link={link}/>
                )
            })}
            
        </ul>
    )
}

export default ContactLinksList;