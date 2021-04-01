import React from 'react';
import emailjs from "emailjs-com"

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm( "service_mh8o8qf" , 'template_l5n1c4x', e.target, 'user_Y07icfDpVjnMI4q7kEjB7')
            .then((result)=>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div className="ContactFormPage">
            <div className="container emailcontact">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                        <label for="name" className="form__label">Nom</label>
                    </div>
                        <div className="col-8 form-group pt-2 mx-auto form__group field">
                            <input type="email" className="form__field" placeholder="Email" name="email" id='email' required />
                            <label for="email" className="form__label">Email</label>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto form__group field">
                            <input type="text" className="form__field" placeholder="Subject" name="subject" id='sub' required />
                            <label for="sub" className="form__label">Sujet</label>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto form__group field">
                            <textarea className="form__field" id="message" cols="35" rows="6" placeholder="Your message" name="message"/>
                            <label for="message" className="form__label">Message</label>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Envoyer"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
