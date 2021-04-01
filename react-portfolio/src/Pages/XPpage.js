import React from 'react';
import ExpAndEduc from '../Components/ExpAndEduc';
import Tittle from '../Components/Tittle';

export default function XPpage() {
    return (
        <div className="XPPage">
            <Tittle title={'Expériences & Education'} span={'Expériences & Education'} />
            <ExpAndEduc />
        </div>
    )
}
