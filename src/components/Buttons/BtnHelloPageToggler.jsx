const BtnHelloPageToggler = ({to, pageToggle, setPageToggle}) => {
    
    return (
        <div className={`btn--hello-toggler ${to}${pageToggle ? " hidden" : ""}`}>
            <button className={`btn`} onClick={() => setPageToggle(to === 'next' ? true : false)}>
                <span className="burger"></span>
            </button>
        </div>
    )
}

export default BtnHelloPageToggler;