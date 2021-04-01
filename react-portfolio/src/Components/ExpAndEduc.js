import React from 'react'

export default function ExpAndEduc({myClass}) {
    return (
        <div>
            <h1>Education</h1>
            <div className={myClass}>
                <ul>
                    <li>
                        <h4>Septembre 2020 - Mars 2021</h4>
                        <br/>
                        Planète Artifices
                        <p>
                            <br />
                            Stage en entreprise à temps partiel.< br/>< br/>
                            Ma mission consistait à participer au développement du site web de l’entreprise, y ajouter un catalogue interactif et développer un logiciel permettant à l’entreprise de modifier les informations du site facilement à travers ce logiciel.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
