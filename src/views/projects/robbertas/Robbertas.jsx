import LinkProjectVisit from '../../../components/links/LinkProjectVisit/LinkProjectVisit'
import './Robbertas.scss'
export default function Robbertas() {
    return <main className="robbertas__main">
        <div className="robbertas__block">
            <div className="robbertas__description-block">
                <span className='robbertas__description-span'>A)</span>
                <p className='robbertas__description-text'>Balaclava designs brand.</p>
            </div>

            <div className="robbertas__description-block">
                <span className='robbertas__description-span'>B)</span>
                <p className='robbertas__description-text'>Fictional ecommerce project.</p>
            </div>

            <div className="robbertas__description-block">
                <span className='robbertas__description-span'>C)</span>
                <p className='robbertas__description-text'>It's a cvlt.</p>
            </div>

            <div className="robbertas__description-block">
                <span className='robbertas__description-span'>D)</span>
                <p className='robbertas__description-text'>Setted up on Wordpress.</p>
            </div>
        </div>
        <LinkProjectVisit/>
    </main>
}