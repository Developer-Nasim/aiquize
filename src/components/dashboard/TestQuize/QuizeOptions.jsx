import OptItem from "./OptItem"; 
import style from './style.module.css'
export default function QuizeOptions({options,selectOne,forSummary,wasSelected,answers,...rest}) {
    const Opt = options 
//     wasSelected
// answered
    return(
        <div className={style.quize_item_options}>
            {Opt ?
                Opt.map((item,i) => forSummary ? <OptItem key={i} val={item} label_class={i == answers && wasSelected != 'none' ? ' answer' : i == wasSelected && wasSelected != 'none'? ' wasSelected' : ''} disabled/> : <OptItem key={i} val={item} id={i} onClick={() => selectOne(i)} {...rest}/>)
            : null} 
        </div>
    )
}