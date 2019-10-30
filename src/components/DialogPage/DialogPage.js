import React from 'react';
import style from './DialogPage.module.css'
import MessagesContainer from './Messages/MessagesContaner';

const DialogPage = (props)=> {
    
    return (
        <div className = {style.dialogpage}>      
       <MessagesContainer store ={props.store}/>
        </div>
    )
}

export default DialogPage