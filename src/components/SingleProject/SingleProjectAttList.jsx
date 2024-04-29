const SingleProjectAttList = ({list}) => {
    return (
        <ul className='single-project-attribute-list'>
            {list.map((item, i) => {
                return (
                    <li key={i} className="list-item">
                        <p className='tech'>{item}</p>
                    </li>
                )
            })}
        </ul>
    )
}
export default SingleProjectAttList;