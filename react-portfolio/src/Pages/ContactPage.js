import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';


function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="map-sect"></div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={'+336 59 28 13 16'} text2={'+336 59 28 13 16'}/>
                <ContactItem icon={email} text1={'+336 59 28 13 16'} text2={'+336 59 28 13 16'}/>
                <ContactItem icon={location} text1={'+336 59 28 13 16'} text2={'+336 59 28 13 16'}/>
            </div>
        </div>
    )
}

export default ContactPage;

