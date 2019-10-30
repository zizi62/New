import React from 'react';
import style from './Friend.module.css'
import PropTypes from 'prop-types';


const Friend = (props)=> {
    return (
        <div className = {style.friend}>
            <img className = {style.ava}src={props.ava} alt=""/>
            <p className = {style.name}>{props.name}</p>
        </div>
    )
}

Friend.propTypes = {
    ava: PropTypes.string,
    name:PropTypes.string

  };

export default Friend