const SingleProjectLinksList = ({list}) => {
    return (
        <ul className='single-project-links'>
            {list.map((link, i) => {
                return (
                    <a key={i} href={link.url} className='link link--project single-project-link hover--bg-b' target="_blank" rel="noreferrer">
                        <span className='link-text'>{link.name}</span>
                        <span className="link-text--hover">{link.name}</span>
                    </a>
                )
            })}
        </ul>
    )
}
export default SingleProjectLinksList;