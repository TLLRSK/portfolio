const ContactLink = ({i, link}) => {
    return (
        <li key={i} className='contact__links-list-item'>

            <a href={link.url} className="link link--contact" target="_blank">

                <div className='row'>

                    <span className='span'>{link.action}</span>

                    <div className='link-text'>
                        {link.text.map((p,i) => {
                            return <p className="text" key={i}>{p}</p>
                        })}
                    </div>

                </div>

                <div className='row row--hover'>

                    <span className='span--hover'>&gt;</span>

                    <div className='link-text--hover'>
                        {link.text.map((p,i) => {
                            return <p className="text--hover" key={i}>{p}</p>
                        })}
                    </div>

                </div>
                
            </a>

        </li>
    )
}

export default ContactLink;