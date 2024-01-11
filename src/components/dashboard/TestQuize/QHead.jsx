import style from './style.module.css'
export default function QHead({txt,num}) {
    
    return(
        <div className={style.quize_head}>
            <h4>{txt} <span>{num}/10</span></h4>
            <div className={style.quize_progress} style={{width: num*10+"%"}}></div>
        </div>
    )
}