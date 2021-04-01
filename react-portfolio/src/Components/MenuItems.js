import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="infoItem">
                            <h5>
                                {item.title}
                            </h5>
                            <br/>
                            <br />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
