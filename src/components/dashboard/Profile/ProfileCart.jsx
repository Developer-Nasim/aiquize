import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Contexts/Auth'
import Button from '../../SingleComponents/Button'
import style from './style.module.css'

export default function ProfileCart() {
    const navigate = useNavigate()
    const {currentUser,logOut} = useAuth()
    const {displayName,email,photoURL} = currentUser
    const logoutNow = () => {
        logOut()
        navigate('/')
    }
    return (
        <div className={style.ProfileCart}>
            <img src={photoURL} className='rounded-circle' alt="" />
            <h5>{displayName}</h5>
            <p>{email}</p>
            <Button onClick={logoutNow } txt="Log Out" classes={'red'}/>
        </div>
    )
}