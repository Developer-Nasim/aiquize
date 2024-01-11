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
                                <h2 className="text-center mb-3">About <b style={{color: "var(--green)"}}>AiQuiz</b></h2>
                                <p>Hello, I&apos;m Amiruzzaman Nasim, a seasoned frontend developer with four years of expertise in crafting innovative digital experiences.</p> 
                                <p>My passion for learning and sharing knowledge has led me to create a unique platform that empowers individuals to test their expertise effortlessly.</p> 
                                <p>At my website, users enjoy a seamless and free quiz-taking experience tailored to their preferred topics. The interactive nature of the platform allows users to request personalized quizzes, and my AI-driven system generates relevant and engaging questions. By fostering a community of curious minds, I aim to make learning enjoyable and accessible for everyone.</p> 
                                <p>Join me on this educational journey, where curiosity meets technology, and together, we can expand our knowledge horizons.</p> 
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