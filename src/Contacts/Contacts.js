import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import styleButton from '../common/styles/Button.module.css'
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <form className={style.contactsForm}>
                    <input className={style.contactsInput} type="text"/>
                    <input className={style.contactsInput} type="text"/>
                    <textarea name="" id="" cols="30" rows="10" className={style.contactsTextArea}></textarea>
                    <button className={styleButton.button}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;