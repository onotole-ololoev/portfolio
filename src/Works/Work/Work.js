import React from 'react';
import style from "./Work.module.css";
import styleButton from '../../common/styles/Button.module.css'


const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.workItem}>
                <a className={styleButton.button} href="#">Open</a>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;