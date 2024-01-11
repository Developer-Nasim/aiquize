import style from './style.module.css'
export default function OptItem({id,val,label_class,...rest}) {
    return(
        <label htmlFor={id} className={`${style.checkbox_with_text} ${label_class}`}>
            <input type="radio" name="1" value={id} id={id} {...rest}/>
            <span>{val}</span>
        </label>
    )
}