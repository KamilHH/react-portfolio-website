import './contact.scss';
import Image from '../../assets/shake.svg'
import {useState} from "react";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={Image} alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="E-MAIL"/>
                    <textarea placeholder="Message">
                    </textarea>
                    {message && <span> Thanks for your message.
                        We will get back with you ASAP :)</span>}
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;