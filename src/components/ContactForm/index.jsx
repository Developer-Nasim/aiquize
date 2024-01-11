import Input from "../SingleComponents/Input";
import Textarea from "../SingleComponents/Textarea";
import Button from "../SingleComponents/Button";
import style from './style.module.css'
import SendEMail from "../../Helpers/SendEmail";
import { useState } from "react";


const initState = {
    name:'',
    subj:'',
    email:'',
    message:'',
}

export default function ContactForm() {
    const [datas,setDatas] = useState({...initState})
    const [status,setStatus] = useState(null)

    const inputHandles = (e) => {
        const target = e.target
        setDatas((prev) => ({
            ...prev,
            [target.name]:target.value,
            
        }))
    }

    const theStatus = (val) => {
        setStatus(val)
    }
     
     
     
    
    
    const submitContactInfo = (e) => {
        e.preventDefault() 
        SendEMail(datas,theStatus)
        setDatas({...initState})
    }
    return (
        <form onSubmit={submitContactInfo} className={style.contact_wrp}>
            <h2>Contact Us</h2>
            <p>For Any issue or any help please contact us.</p>
             
            {status ? 
                <div className="alert alert-success text-center" role="alert">Successfully Sent!</div>
            : status === false ? 
                <div className="alert alert-danger text-center" role="alert"> Sorry something wents wrong! </div>
            :''}
            
            <Input placeholder="Your Name" name="name" onChange={inputHandles} value={datas.name}/>
            <Input placeholder="Your Email" name="email" onChange={inputHandles} value={datas.email}/>
            <Input placeholder="Subject" name="subj" onChange={inputHandles} value={datas.subj}/>
            <Textarea placeholder="Message..." name="message" onChange={inputHandles} value={datas.message}/>

            {datas.name && datas.subj && datas.email && datas.message ?<Button classes={'mt-2'} type="submit" txt="Submit"/> : <Button classes={'mt-2'} type="submit" txt="Submit" disabled/>}            

        </form>
    )
}