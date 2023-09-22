import LinkProjectVisit from '../../../components/links/LinkProjectVisit/LinkProjectVisit'
import './Todoapp.scss'
export default function Todoapp() {
    return  <main className="todoapp__main">
        <div className="todoapp__block--top">
            <p>Humble classic basic tasks manager that will allow you to:</p>
        </div>
        <ul className="todoapp__block--bottom todoapp__list">
            <li className='todoapp__list-item'>
                <span className='todoapp__list-item-number'>1</span>
                <p className='todoapp__list-item-text'><span className='todoapp__list-item-bold'>Add</span><br/> any task</p>
            </li>
            <li className='todoapp__list-item'>
                <span className='todoapp__list-item-number'>2</span>
                <p className='todoapp__list-item-text'><span className='todoapp__list-item-bold'>Check</span><br/> any completed task</p>
            </li>
            <li className='todoapp__list-item'>
                <span className='todoapp__list-item-number'>3</span>
                <p className='todoapp__list-item-text'><span className='todoapp__list-item-bold'>Delete</span><br/> any completed task</p>
            </li>
        </ul>
        <LinkProjectVisit/>
    </main>
}