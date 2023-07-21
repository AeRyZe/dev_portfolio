import './contact.css'

function Contact() {
    return (
        <div id='contact-container'>
            <h2 id='contact-title'>Contact</h2>
            <form action="post" id='contact-form'>
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