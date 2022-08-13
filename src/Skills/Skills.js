import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"My Skills"}/>
                <div className={style.skills}>
                    <Skill title={'React'} description={'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить отдельные ...'}/>
                    <Skill title={'React'} description={'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить отдельные ...'}/>
                    <Skill title={'React'} description={'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить отдельные ...'}/>
                    <Skill title={'React'} description={'Перевод с английского, немецкого, французского, испанского, польского, турецкого и других языков на русский и обратно. Возможность переводить отдельные ...'}/>
                    <Skill title={'TypeScript'} description={'hgjgjhgjhgjjgjghjgjg'}/>
                    <Skill title={'Redux'} description={'hgjgjhgjhgjjgjghjgjg'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;