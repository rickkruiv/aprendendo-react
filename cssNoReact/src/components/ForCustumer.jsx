import React from 'react'
import classes from "./ForCustumer.module.css"

const ForCustumer = () => {
    return (
        <div className={classes.customerSection}>
            <div className={classes.title}>
                <h2>Melhores serviços e <br />carros de luxo</h2>
                <p>Sed volutpat sed nunc vel porttitor. Fusce placerat aliquam dolor non pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere</p>
            </div>
            <div className={classes.container}>
                <img src="../../public/tiguan.webp" alt="" />
                <ul>
                    <li>
                        <h3>Suporte ao Cliente</h3>
                        <p>Sed volutpat sed nunc vel porttitor. Fusce placerat aliqu dolor non pretium.</p>
                    </li>
                    <li>
                        <h3>Muitos locais</h3>
                        <p>Sed volutpat sed nunc vel porttitor. Fusce placerat aliqu dolor non pretium.</p>
                    </li>
                    <li>
                        <h3>Cancelamento Gratuito</h3>
                        <p>Sed volutpat sed nunc vel porttitor. Fusce placerat aliqu dolor non pretium.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ForCustumer