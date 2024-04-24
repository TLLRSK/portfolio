const BtnWorkCloseProject = ({onProject, closeProject}) => {
    return (
        <div className={`btn--close-project${onProject ? "" : " hidden"}`}>

            <button className="btn" onClick={() => closeProject()}>

                <span className="burger"></span>
                
            </button>
            
        </div>
    )
}

export default BtnWorkCloseProject;