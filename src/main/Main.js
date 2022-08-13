import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatar from './../assets/image/ava.JPG';


const Main = () => {

    return (
        <div className={style.main}>
            <div className={styleContainer.container}>

                    <div className={style.greetings}>
                        <p className={style.text}>Hello</p>
                        <h1 className={style.title}>I am Onotole Ololoev</h1>
                        <p className={style.text}>Frontend Developer</p>
                    </div>
                    <div className={style.photo}>
                        <img src={avatar} alt="avatar"/>
                    </div>

            </div>
        </div>
    );
};

export default Main;