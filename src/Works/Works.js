import React from 'react';
import style from "./Works.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todo.jpg';
import socialImage from './../assets/image/social.jpg';


const Works = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }
    const todoList = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.works}>
                    <Work style={socialNetwork} description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'todolist react'}/>
                    <Work style={todoList} description={'гитарист-виртуоз, современный трубадур. Выступал на международных фестивалях, таких как «Buskers Festival '} title={'social network'}/>

                </div>
            </div>
        </div>
    );
};

export default Works;