import Button from '../../SingleComponents/Button'
import style from './style.module.css'
export default function SingleQuizes({title,created,txt,to}) {
    return (
        <div className={style.single_quize}>
            <div>
                <h5>{title}</h5>
                <span>Last Updated: {created}</span>
            </div>
            <Button txt={txt} classes={txt == 'Details' ? 'yellow' : null} to={to}/>
        </div> 
    )
}