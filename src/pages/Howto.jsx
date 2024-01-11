import HStep from "../components/HStep";
import Button from "../components/SingleComponents/Button"; 

export default function Howto() {
    return(
        <section className="howto"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="howtoStep_wrp mt-5 mb-5 text-center">
                            <h1>How it&#19s work</h1>
                            <div className="howtosteps mt-5 mb-5">
                                <HStep num="1" content="Unknown person disturbing you in social media? are you worried about it, if and THEN" classes="right"/>
                                <HStep num="2" content="Unknown person disturbing you in social media? are you worried about it, if and THEN"/>
                                <HStep num="3" content="Unknown person disturbing you in social media? are you worried about it, if and THEN" classes="right"/>
                                <HStep num="4" content="Unknown person disturbing you in social media? are you worried about it, if and THEN"/>
                            </div>
                                <Button txt={'Start Now'} to={'/profile'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}