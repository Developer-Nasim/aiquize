import Input from "../SingleComponents/Input";
import Textarea from "../SingleComponents/Textarea";
import Button from "../SingleComponents/Button";
import style from './style.module.css'
export default function ContactForm() {
    return (
        <form action="#" className={style.contact_wrp}>
            <h2>Contact Us</h2>
            <p>For Any issue or any help please contact us.</p>

            <Input placeholder="Your Name"/>
            <Input placeholder="Your Email"/>
            <Input placeholder="Subject"/>
            <Textarea placeholder="Message..." />

            <Button classes={'mt-2'} type="submit" txt="Find Now"/>

        </form>
    )
}