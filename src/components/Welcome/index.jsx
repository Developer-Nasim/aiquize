import Button from '../SingleComponents/Button'
import style from './style.module.css'
export default function Welcome() {
    return (
        <section className={style.welcome}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1"> 
                        <div className={style.welcome_wrp}>
                            <h1>AiQuize</h1>
                            <h2>Test your knowledge</h2>
                            <p>If you are a persona who wanna check there own general knowledge then it’s perfect platform you.</p>
                            <Button txt="Start Free" to="profile" />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}