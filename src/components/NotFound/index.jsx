import Button from "../SingleComponents/Button";
import style from './style.module.css'

export default function NotFound({heading,txt,to}) {
    return(
        <div className={`${style.not_found} mt-5 mb-5`}>
            <h1>{heading?heading:"Not Found"}</h1>
            <p>{txt?txt:"This page is not Found so back to the Home!"}</p>
            <Button classes={'dark'} txt="Back" to={heading?to:"/"}/>
        </div>
    )
}