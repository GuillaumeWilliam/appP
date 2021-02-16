import 'bootstrap/dist/css/bootstrap.css';
import React from "react";

function MainContact() {
    return (
        <>
        <h1>Contactez-moi</h1>
        <div className="contacts">
            <div className="email">
                <h2>Par e-mail</h2>
                <i className="far fa-paper-plane fa-3x"></i>
                <p>
                    <a href = "mailto:guillaume.gallard@live.fr">guillaume.gallard@live.fr</a>
                </p>
                <p>Ou via le formulaire de contact ci-dessous...</p>
            </div>
            <div className="phone">
                <h2>Par téléphone</h2>
                <i className="fas fa-mobile-alt fa-3x"></i>
                <p>
                    <a href="tel:+33783460146">+33·7·83·46·01·46</a>
                </p>
                <p>
                    <a href="http://bit.ly/textwilliam" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp fa-lg"></i>Whatsapp</a>
                </p>
            </div>
            <div className="address">
                <h2>Par courrier</h2>
                <i className="far fa-envelope fa-3x"></i>
                <p>
                    Guillaume Gallard
                    <br/>
                    <i>Rue Pierre Semard
                    <br/>
                    <b>92220 Bagneux</b></i>
                </p>
            </div>
        </div>
        <div className="contactform">
            <h2>Envoyer un e-mail</h2>
            <form action="mailto:guillaume.gallard@live.fr" method="post" enctype="text/plain">
                <input required type="text" id="name" placeholder="Votre nom"/><br/>
                <input required type="email" id="email" placeholder="Votre adresse e-mail"/><br/>
                <input type="text" id="number" placeholder="Votre n&#176; de téléphone"/><br/>
                <textarea required type="comment" id="message" placeholder="Votre message"></textarea><br/>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
        <div className="map">            
            <h2>Localisation</h2>
            <div className="gmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.214120779943!2d2.292408315958022!3d48.796891879281475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67095552e76bf%3A0x8d6a6733a889de68!2sRue%20Pierre%20Semard%2C%2092220%20Bagneux!5e0!3m2!1sen!2sfr!4v1606404532614!5m2!1sen!2sfr" width="100%" height="100%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
        </div>
        </>
    )
}

export default MainContact;