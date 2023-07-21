import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mvbnt7e', 'template_l0jmgqs', form.current, '46K0f3sT8kgeFp-zt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        e.target.reset();
    };

    return (
        <div id='contact-container'>
            <h2 id='contact-title'>Contact</h2>
            <form ref={form} onSubmit={sendEmail} id='contact-form'>
                <label htmlFor="contact-name">Nom</label>
                <input type="text" name="contact-name" id='contact-name' placeholder='Votre nom et prénom' required />
                <label htmlFor="contact-mail">Email</label>
                <input type="text" name="contact-mail" id='contact-mail' placeholder='Votre adresse mail' required />
                <label htmlFor="contact-message">Message</label>
                <textarea name="contact-message" id="contact-message" cols="30" rows="15" placeholder='En quoi puis-je vous aider ?' required></textarea>
                <input type="submit" text='Envoyer' id='contact-send' />
            </form>
        </div>
    )
}

export default Contact