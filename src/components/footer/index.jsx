import style from './style.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p>© All right reserved</p>
                    </div>
                    <div className="col-lg-8">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}