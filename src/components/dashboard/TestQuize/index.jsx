import { useNavigate, useParams } from "react-router-dom"; 
import QHead from "./QHead";
import Button from "../../SingleComponents/Button";
import style from './style.module.css'
import QuizeOptions from "./QuizeOptions";
import { useLocalQuize } from "../../../Contexts/QuizeFromLocalStorage";
import NotFound from "../../NotFound";
import { useRef, useState } from "react";

export default function TestQuize() { 
    const {id} = useParams()
    const {quize,updateData} = useLocalQuize()
    const [qn,setQn] = useState(0)
    const [ans,setAns] = useState(null)
    const [selectedAns,setSelectedAns] = useState('none')
    const navigate = useNavigate()
    const qzItm = useRef()
    const qz = quize[id]
     
  
    const nextOne = () => {  

        const the_items = [...quize]
        the_items.splice(id,1)

        if (qn !== 9) {
            setQn((prev) => prev+1)
            if (ans) { 
                setAns((prev) => ({
                    title: qz.title,
                    done: true,
                    que: [
                        ...prev.que,
                        {
                            question: qz.que[qn].question,
                            selected: selectedAns,
                            options: qz.que[qn].options,
                            answer: qz.que[qn].answer,
                        },
                    ],
                }))
            }else{
                setAns((prev) => ({
                    ...prev,
                    title: qz.title,
                    done: true,
                    que: [ 
                        {
                            question: qz.que[qn].question,
                            selected: selectedAns,
                            options: qz.que[qn].options,
                            answer: qz.que[qn].answer,
                        },
                    ],
                }))
            } 
        }else{
            const add = {
                title: qz.title,
                done: true,
                time: Date.now(),
                que: [
                    ...ans.que,
                    {
                        question: qz.que[qn].question,
                        selected: selectedAns,
                        options: qz.que[qn].options,
                        answer: qz.que[qn].answer,
                    },
                ],
            }
            const readyToUpload = [add,...the_items]
            localStorage.setItem('quizes', JSON.stringify(readyToUpload))
            navigate(`/profile/quize/${id}/details`)
            updateData()
        }

        setSelectedAns('none')
        // Reset Checked inputs
        if(qzItm){
            qzItm.current.querySelectorAll('input').forEach(inp => {
                if (inp.checked) {
                    inp.checked = false
                }
            });
        }
    }

    
    const SelectedOpt = (i) => {
        setSelectedAns(i)
    }
 
 

    return (

        <>
        { quize[id] ? 
            <div className={style.quize_item} ref={qzItm}>
                <QHead txt={qz.title} num={(qn+1)}/>
                <div className={style.quize_item_wrap}>
                    <h5 className="mb-3 mt-3">{qz.que[qn].question}</h5>
                    <QuizeOptions options={qz.que[qn].options} selectOne={SelectedOpt}/>
                    <div className={style.actBtns}>  
                        {qn === 9 ? <Button txt="Submit" onClick={nextOne}/> : <Button txt="Next" classes="dark" onClick={nextOne}/>}
                    </div>
                </div>
            </div>

        : <NotFound heading="No MCQ Found" txt="Sorry There is no MCQ" to="/profile"/>} 

        </>
    )
}