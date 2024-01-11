import style from './style.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>© All right reserved</p>
                    </div> 
                </div>
            </div>
        </footer>
    )
}