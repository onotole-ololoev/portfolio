import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default Nav;