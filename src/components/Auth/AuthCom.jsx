import Button from '../SingleComponents/Button'
import {useAuth} from '../../Contexts/Auth'
import style from './style.module.css'
import { useNavigate } from 'react-router-dom'
export default function AuthCom() {
    const {signIn} = useAuth()
    const navigate = useNavigate()

    const Login = () => {
        signIn()
        navigate('/profile')
    }

    return (
        <div className={style.auth_wrp}>
            <h2>Login/Create Account</h2>
            <p className='mb-3'>Just click below &quot;login with google&quot; button and login with your GMail Account</p>
            <Button txt="Login With Google" onClick={Login}/>
        </div>
    )
}