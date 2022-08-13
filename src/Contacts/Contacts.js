import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Contacts'}/>
                <form className={style.contactsForm}>
                    <input className={style.contactsInput} type="text"/>
                    <input className={style.contactsInput} type="text"/>
                    <textarea name="" id="" cols="30" rows="10" className={style.contactsTextArea}></textarea>
                    <button type={"submit"} className={style.button}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;