import HStep from "../components/HStep";
import Button from "../components/SingleComponents/Button"; 

export default function Howto() {
    return(
        <section className="howto"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="howtoStep_wrp mt-5 mb-5 text-center">
                            <h1>How it&#39;s work</h1>
                            <div className="howtosteps mt-5 mb-5">
                                <HStep num="1" content="I am assuming you are already in this website. so first step is, you have to login/create account" classes="right"/>
                                <HStep num="2" content="After login you will be redirected into Dashboard/Profile page, from there click on 'Create' button then you will get a popup "/>
                                <HStep num="3" content="In the Popup you will get a box, write the topic name as per your interested, & click on Below button then if everything is fine then it will take a few moment to create quiz questions for your. and then the popup will be close autometically. " classes="right"/>
                                <HStep num="4" content="Then you can see your quizes in the dashboard, then click on the button to start quize and if you have already taken click to see the result summary" />
                            </div>
                                <Button txt={'Start Now'} to={'/profile'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}