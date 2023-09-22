import './Aboutme.scss'
import LinkProjectVisit from '../../../components/links/LinkProjectVisit/LinkProjectVisit'

export default function Aboutme() {
    return  <main className="aboutme__main">
                <div className="aboutme__block--top">
                    <p>One Page project for a junior FRONTEND DEV & UX/UI DESIGNER.</p>
                </div>
                <div className="aboutme__block--bottom">
                    <p>Includes:</p>
                    <div className="aboutme__grid">
                        <div className="aboutme__grid-item">
                            <p>Cool portrait</p>
                        </div>
                        <div className="aboutme__grid-item">
                            <p>Transitions</p>
                        </div>
                        <div className="aboutme__grid-item">
                            <p>Brief info</p>
                        </div>
                        <div className="aboutme__grid-item">
                            <p>Dark mode</p>
                        </div>
                    </div>
                </div>
                <LinkProjectVisit/>
            </main>
}