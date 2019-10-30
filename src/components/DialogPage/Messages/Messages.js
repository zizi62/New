import React from 'react';
import style from './Messages.module.css'
import Message from './Message/Message';
import { NavLink } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators';
import { Textarea } from '../../common/FormControls/FormControls';


const maxLength10 = maxLengthCreator(10)

let DialogMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='textarea' component={Textarea} cols="30" rows="3"  validate ={[required, maxLength10]}/>
            <button>Add</button>
        </form>
    )

}

DialogMessageForm = reduxForm({ form: 'dialogMessage' })(DialogMessageForm)

const Messages = (props) => {

    let onSubmit = (value) => {
        props.addMessage(value.textarea)
    }

    return (
        <>
            <div className={style.namesList}>
                {props.dialogPage.dialogList.map((dialogName) => {
                    return <NavLink
                        to={'/dialogs/' + dialogName.id} className={style.item}
                        key={dialogName.id}
                        activeClassName={style.active}> {dialogName.name}
                    </NavLink>
                }
                )}

            </div>
            <div className={style.messages}>

                {props.dialogPage.messages.map(message => {
                    return <Message {...message} />
                })}
                <DialogMessageForm onSubmit={onSubmit} />


            </div>
        </>

    )
}

export default Messages