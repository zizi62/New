import React from 'react'
import style from './Message.module.css'
import PropTypes from 'prop-types';


const Message = (props)=>{
    return (
        <div className={style.message}>
            <p>{props.text}</p>
        </div>
          
    )
}
Message.propTypes = {
    text:PropTypes.string

  };

export default Message;