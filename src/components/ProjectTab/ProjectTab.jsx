import './ProjectTab.scss';

export default function ProjectTab(props) {
    const {index, title} = props;
    return (
        <label className="work__project">
            <div className="work__project-cover">
                <div className="work__project-number">
                    <span className="work__project-number-text ff--literata">{index}.</span>
                </div>

                <div className="work__project-title">
                    <h3 className="work__project-title-text transition-delay--300">{title}</h3>
                </div>

                <div className="work__project-expand">
                    <span className="work__project-expand-symbol"></span>
                    <span className="work__project-expand-symbol"></span>
                </div>
            </div>
            <button type="radio"data-index={index} name="project" className='work__project-button btn btn--open-project' onClick={e => console.log(e.target.dataset.index)}/>
        </label>
    )
}