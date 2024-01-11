import BlockWithImg from "../components/About";
import Banner from '../assets/imgs/banner.jpg' 
export default function About() {
    return(
        <section className="about_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-wrp mt-5 mb-5">
                            <BlockWithImg img={Banner}>
                                <h2 className="text-center">About <b style={{color: "var(--green)"}}>AiQuize</b></h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, modi commodi! Numquam architecto a velit exercitationem enim illo consequatur perferendis, atque, officia molestiae voluptatum, esse tempore omnis impedit sit sequi!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, modi commodi! Numquam architecto a velit exercitationem enim illo consequatur perferendis, atque, officia molestiae voluptatum, esse tempore omnis impedit sit sequi!</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, modi commodi! Numquam architecto a velit exercitationem enim illo consequatur perferendis, atque, officia molestiae voluptatum, esse tempore omnis impedit sit sequi!</p>
                                <p>
                                    Developed By: <b>Amiruzzaman Nasim</b> <br />
                                    Email: ajnasim72@gmail.com<br />
                                    Call: +8801405618060
                                </p>
                            </BlockWithImg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}