import React from 'react';

function ServicesSection({image, title, text, link, Design}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img className="s-icon" src={image} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                        {link}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;