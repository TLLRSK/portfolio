const HelloDescription = ({description}) => {
    return (
        <ul className="hello__description-grid">

            {description.map((e,i) => {
                return (
                    <li key={i} className='hello__description-grid-item'>
                        <span className='char'>{`${e.char} )`}</span>
                        <p className='text'>{e.text[0]}</p>
                        <p className='text'>{e.text[1]}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default HelloDescription;