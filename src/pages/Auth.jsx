import AuthCom from "../components/Auth/AuthCom";

export default function Auth() {
    return(
        <section className="join mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <AuthCom/>
                    </div>
                </div>
            </div>
        </section>
    )
}