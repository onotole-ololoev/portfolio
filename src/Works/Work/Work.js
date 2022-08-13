import React from 'react';
import style from "./Work.module.scss";


const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.workItem} style={props.style}>
                <a className={style.viewButton} href="#">Open</a>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Work;