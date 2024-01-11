import ContactForm from "../components/ContactForm";


export default function Contact() {
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}