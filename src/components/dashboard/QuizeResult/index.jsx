import { useParams } from "react-router-dom";
import { useLocalQuize } from "../../../Contexts/QuizeFromLocalStorage";

import QHead from "../TestQuize/QHead"; 
import style from '../TestQuize/style.module.css'
import QuizeOptions from "../TestQuize/QuizeOptions"; 

import Summary from "./Summary";


export default function QuizeResult() {
    const {id} = useParams()
    const {quize} = useLocalQuize()
    const result = quize[id] 
    return (
        <> 
            <Summary data={result.que}/>
            <div className={`${style.quize_item} ${style.result_item}`}>
                <QHead txt={result.title} num="10"/> 
                {result && result.que.length > 0 ?
                <>
                {result.que.map((item,i) => (
                    <div key={i} className={style.quize_item_wrap}>
                        <h5>{item.question}</h5>
                        <QuizeOptions wasSelected={item.selected} answers={item.answer} forSummary options={item.options} />    
                    </div>
                ))}  
                </>
                : 'No Result'}
            </div>
        </>
    )
}