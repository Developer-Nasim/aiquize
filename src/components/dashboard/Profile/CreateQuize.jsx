import { useState } from 'react'
import Button from '../../SingleComponents/Button'
import CreateModal from './CreateModal'
import style from './style.module.css'
export default function CreateQuize() {
    const [modal,setModal] = useState(false)

    const HandleModal = () => {
        setModal(!modal)
    }
    return (
        <>
        <div className={style.create_quizes}>
            <Button txt="Create" onClick={HandleModal}/>
        </div>
        {modal ? <CreateModal showHide={HandleModal}/> : null}
        </>
    )
}