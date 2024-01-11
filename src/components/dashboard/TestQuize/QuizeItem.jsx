import QHead from "./QHead";
import Button from "../../SingleComponents/Button";
import style from './style.module.css'
import QuizeOptions from "./QuizeOptions";


export default function QuizeItem() {
    return(
        <div className={style.quize_item}>
            <QHead txt="Quizzes" num="2/10"/>
            <div className={style.quize_item_wrap}>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <QuizeOptions /> 
                <div className={style.actBtns}>
                    <Button txt="Next"/>
                </div>
            </div>
        </div>
    )
}