import NotFound from "../components/NotFound";

export default function ErorrPage() {
    return (
        <section className="error_page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="error_wrp">
                            <NotFound/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}