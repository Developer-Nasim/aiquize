import { NavLink } from "react-router-dom";

export default function Button({to,txt,classes,type,...rest}) {
    return (
        <>
            {to ? <NavLink className={"them_btn "+classes} to={to} {...rest}>{txt}</NavLink> : <button className={"them_btn "+classes} type={type ? type : "button"} {...rest}>{txt}</button> }
        </>
    )
}