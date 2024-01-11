import SingleQuizes from './SingleQuizes'
import style from './style.module.css'
import { useLocalQuize } from '../../../Contexts/QuizeFromLocalStorage';
import TimeConvert from '../../../Helpers/TimeConvert';

  

export default function AllQuizes() {
    const {quize} = useLocalQuize()
    console.log('yess',quize)
    return (
        <> 
            <div className={style.all_quizes}>
                <h3>All Quizzes</h3>
                {
                    quize ? 
                    
                        quize.map((item,i) => <SingleQuizes key={i} title={item.title} created={item.time? TimeConvert(item.time) :'N/A'} txt={item.done ? "Details": 'Start'} to={item.done ? "quize/"+i+"/details" : "quize/"+i}/>)
                    
                    :""
                }  
            </div>
        </>
    )
}