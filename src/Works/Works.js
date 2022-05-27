import React from 'react';
import style from "./Works.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2>My Works</h2>
                <div className={style.works}>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'todolist react'}/>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>
                    <Work description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;