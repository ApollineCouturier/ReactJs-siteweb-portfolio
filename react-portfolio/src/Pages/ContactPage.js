import React from 'react'
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import ContactItem from '../Components/ContactItem';
import cv from '../img/cvApollineCouturierGauducheau_compressed.pdf';
import Tittle from '../Components/Tittle';
import ContactForm from '../Components/contactForm';


function ContactPage() {
    return (
        <div className="ContactPageMain">
            <div className="title">
                <Tittle title={'Me contacter'} span={'Me contacter'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+336 59 28 13 16'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'apolline.couturier-gauducheau@epitech.eu'} text2={''} title={'Email'}/>
                    <a href={cv} target="_blank" rel="noreferrer"><ContactItem icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQzNy4zMzMsMTI4SDMzMC42NjdjLTUuODg4LDAtMTAuNjY3LTQuOC0xMC42NjctMTAuNjY3VjEwLjY2N0MzMjAsNC43NzksMzE1LjIyMSwwLDMwOS4zMzMsMEg5NiAgICBDNzguMzU3LDAsNjQsMTQuMzU3LDY0LDMydjQ0OGMwLDE3LjY0MywxNC4zNTcsMzIsMzIsMzJoMzIwYzE3LjY0MywwLDMyLTE0LjM1NywzMi0zMlYxMzguNjY3ICAgIEM0NDgsMTMyLjc3OSw0NDMuMjIxLDEyOCw0MzcuMzMzLDEyOHogTTQyNi42NjcsNDgwYzAsNS44NjctNC43NzksMTAuNjY3LTEwLjY2NywxMC42NjdIOTZjLTUuODg4LDAtMTAuNjY3LTQuOC0xMC42NjctMTAuNjY3VjMyICAgIGMwLTUuODY3LDQuNzc5LTEwLjY2NywxMC42NjctMTAuNjY3aDIwMi42Njd2OTZjMCwxNy42NDMsMTQuMzU3LDMyLDMyLDMyaDk2VjQ4MHoiIGZpbGw9IiNmZmNjMzUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ0NC44NjQsMTMxLjEzNmwtMTI4LTEyOGMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MywwYy00LjE2LDQuMTYtNC4xNiwxMC45MjMsMCwxNS4wODNsMTI4LDEyOCAgICBjMi4wOTEsMi4wNjksNC44MjEsMy4xMTUsNy41NTIsMy4xMTVjMi43MzEsMCw1LjQ2MS0xLjA0NSw3LjUzMS0zLjExNUM0NDkuMDI0LDE0Mi4wNTksNDQ5LjAyNCwxMzUuMjk2LDQ0NC44NjQsMTMxLjEzNnoiIGZpbGw9IiNmZmNjMzUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" text1={''} text2={'Télécharger'} title={'Cv'}/></a>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage;

