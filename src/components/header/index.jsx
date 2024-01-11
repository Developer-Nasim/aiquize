import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.png'
import Button from '../SingleComponents/Button'
import style from './style.module.css' 
import { useAuth } from '../../Contexts/Auth'

// Li & A
const Li_a = ({to,children,...rest}) => {
    return <li {...rest}><NavLink to={to}>{children}</NavLink></li>
}


export default function Header() {

    const {currentUser} = useAuth()

    return (
        <header> 
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <Link className={style.logo}><img src={Logo} alt="AiQuize" /></Link>
                    </div>
                    <div className="col-lg-8">
                        <nav className={style.menus}>
                            <ul>
                                <Li_a to='/'>Home</Li_a>
                                <Li_a to='/howto'>How To?</Li_a>
                                <Li_a to='/about'>About</Li_a>
                                <Li_a to='/contact'>Contact</Li_a> 
                            </ul>
                            <div className={style.action_btns}> 
                            { currentUser ? <Button txt="Dashboard" classes={'dark'} to={'/profile'} /> : <Button txt="Login" to={'/join'} /> }
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}