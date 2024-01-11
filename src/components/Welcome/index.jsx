import Button from '../SingleComponents/Button'
import style from './style.module.css'
export default function Welcome() {
    return (
        <section className={style.welcome}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1"> 
                        <div className={style.welcome_wrp}>
                            <h1>AiQuiz</h1>
                            <h2>Test your knowledge</h2>
                            <p>
                                If you are taking preparation for an interview or you are learning something new and you wanna test your knowledge then you can take some quiz test here for free. 
                            </p>
                            <Button txt="Start Free" to="profile" />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}