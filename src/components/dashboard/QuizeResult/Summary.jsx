import WinImg from "../../../assets/imgs/win.png"
import style from './style.module.css'

export default function Summary({data}) { 
    // selected
    let arrayOfObjects = data;

let sum = arrayOfObjects.reduce((accumulator, currentValue) => {
    if (currentValue.answer === currentValue.selected) {
        return accumulator + 10;
    }else{
        return accumulator
    }
    
}, 0);

    return(
        <div className={style.result_summary}>
            <img src={WinImg} alt="" />
            <h1>Score: {sum}/100</h1>
        </div>
        )
}