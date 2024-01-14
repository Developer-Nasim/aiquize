import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.png'
import Button from '../SingleComponents/Button'
import style from './style.module.css' 
import { useAuth } from '../../Contexts/Auth'
import { useState } from 'react' 

// Li & A
const Li_a = ({to,children,...rest}) => {
    return <li {...rest}><NavLink to={to}>{children}</NavLink></li>
}


export default function Header() { 

    const {currentUser} = useAuth()
    const [showMenu,setShowMenu] = useState(false) 


    const HeaderNav = (
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
    )

 



    return (
        <> 
            <header> 
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-6">
                            <Link className={style.logo}><img src={Logo} alt="AiQuize" /></Link>
                        </div>
                        <div className="col-md-8 col-6">
                            {
                                window.screen.width > 767 ?
                                HeaderNav
                            : 
                                <div className={style.header_action}>
                                    {currentUser && <Link className={style.avatar} to={'/profile'}><img src={currentUser.photoURL} alt='' /> </Link>}
                                    <div className={`${style.humberger_menu} ${style.btn2} ${showMenu ? style.open : ""}`} data-menu="2" onClick={() => setShowMenu(!showMenu)}>
                                        <div className={style.icon}></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${style.theMobileMenu} ${showMenu ? style.open : ''} mobilemenu`}> 
                {HeaderNav} 
            </div>
        </>
    )
}