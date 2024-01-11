import Button from '../../SingleComponents/Button'
import Textarea from '../../SingleComponents/Textarea' 
import style from './style.module.css' 
import { chatModel } from '../../../Configs/LangChainCon';
import { useState } from 'react';
import { useLocalQuize } from '../../../Contexts/QuizeFromLocalStorage';


export default function CreateModal({showHide}) {
    const [topic,setTopic] = useState('')
    const [creating,setCreating] = useState(false)
    const [error,setError] = useState(false)
    const {updateData} = useLocalQuize()

    const GenareteMcq = async () => {
        if (topic.length > 0) {
            setCreating(true)
            try { 

                const AskQuestion =  await chatModel.invoke(`make 10 mcq question answer in json formate about ${topic} json should be like this {'questions': [{'question': xyz,'options': [1,...],'answer': 1}} and make your answered option/question vary short`)
                const GotAnswer = await AskQuestion.content 
                const intoObj = await JSON.parse(GotAnswer) 
 
                const LocalQuize = await localStorage.getItem("quizes")
                const Val = LocalQuize ? JSON.parse(LocalQuize) : ''

                const StoreMcq = {
                    title: topic,
                    que:intoObj.questions,
                    time: Date.now()
                }
                const ob = [
                    StoreMcq,
                    ...Val
                ]

                await localStorage.setItem("quizes", JSON.stringify(ob)) 

                setCreating(false)
                setTopic('')
                updateData()
                showHide()



            } catch (err) { 
                setCreating(false)
                setError(true)
            }
        }
    }

    return (
        <div className={style.create_modal}>
            <div className={style.modal_content}>
                <span onClick={showHide}>X</span>
                <h3>Create Quiz as you need</h3>
                {error ? <h5>Something wents wrong, try again!</h5> : ""}
                {creating ? <div className={style.basic_overlay}><div className="spinner-border text-success" role="status"><span className="visually-hidden">Loading...</span></div></div> : ""}
                <Textarea placeholder="royel bangle tiger" onChange={(e) => setTopic(e.target.value)} value={topic}/>
                <i><b>Tips:</b> just give the topic name like: icc worldcup, bangladesh education system</i>
                <Button txt="Create" onClick={GenareteMcq}/>
            </div>  
        </div>
    )
}