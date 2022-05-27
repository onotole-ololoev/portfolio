import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'



const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Onotole Ololoev</h2>
                <div className={style.socials}>
                    <div className={style.socialItem}>Ld</div>
                    <div className={style.socialItem}>Fb</div>
                    <div className={style.socialItem}>Inst</div>
                    <div className={style.socialItem}>Vk</div>
                </div>
                <span className={style.footerBottom}>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;