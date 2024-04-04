import './contact.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import UiSquare from '../ui-square/ui-square'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wd645c2', 'template_l0jmgqs', form.current, '46K0f3sT8kgeFp-zt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

        alert('Votre message à bien été envoyé !');
    };

    useEffect(() => {
        AOS.init();
    });

    return (
        <section id='contact-container'>
            <h2 id='contact-title' data-aos='fade-right' data-aos-anchor='#contact-container'>Contact</h2>
            <div id='contact-content'>
                <form ref={form} id='contact-form' onSubmit={sendEmail} data-aos='fade-right' data-aos-anchor='#contact-container' data-aos-delay='200'>
                    <label htmlFor="contact-name">Nom</label>
                    <input type="text" autoComplete='off' name="contact-name" id='contact-name' placeholder='Votre nom et prénom' required />
                    <label htmlFor="contact-mail">Email</label>
                    <input type="email" autoComplete='off' name="contact-mail" id='contact-mail' placeholder='Votre adresse mail' pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$' required />
                    <label htmlFor="contact-message">Message</label>
                    <textarea name="contact-message" id="contact-message" cols="30" rows="15" placeholder='En quoi puis-je vous aider ?' required></textarea>
                    <input type="submit" text='Envoyer' name='contact-send' id='contact-send' />
                </form>
                <div id='contact-sub'>
                    <UiSquare id='3' anim='fade-left' anchor='#contact-container' delay='400' />
                    <p id='contact-mailto' data-aos='fade-up' data-aos-anchor='#contact-container' data-aos-delay='600'>
                        Si vous rencontrez un quelconque problème avec ce formulaire, ou que vous préferez me joindre via votre messagerie, cliquez sur ce <a href='mailto:laurent.pardo.dev@gmail.com'>lien</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact