const ContactLink = ({i, link}) => {
    return (
        <li key={i} className='contact__links-list-item'>

            <a href={link.url} className="link link--contact" target="_blank">

                <div className='row'>

                    <span className='link-span'>{link.action}</span>

                    <div className="link-text-container">
                        {link.text.map((p,i) => {
                            return <p className="link-text" key={i}>{p}</p>
                        })}
                    </div>

                </div>

                <div className='row row--hover'>

                    <span className='link-span--hover'>&gt;</span>

                    <div className="link-text-container">
                        {link.text.map((p,i) => {
                            return <p className="link-text--hover" key={i}>{p}</p>
                        })}
                    </div>

                </div>
                
            </a>

        </li>
    )
}

export default ContactLink;