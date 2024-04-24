const HelloListBox = ({list}) => {
    return (
        <div className="hello__list-box">
            <h3 className="list-title">{list.title}</h3>

            <ul className={`hello__list hello__list--${list.title}`}>
                {list.items.map((item, i) => {
                    return (
                        <li key={i} className="list-item">
                            <span className='index'>{`${i}.`}</span>
                            <p className='text'>{item}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HelloListBox;