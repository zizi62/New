import React from 'react'
import style from './Post.module.css'
import PropTypes from 'prop-types';


const Post = (props)=>{
    return (
        <div className = {style.postBox}>
        <img className = {style.img}src={props.ava} alt=""/>
        <p className= {style.message}>{props.message}</p>
        <p className= {style.like}>like: {props.like}</p>
        </div>
    )
}
Post.propTypes = {
    like: PropTypes.number,
    message:PropTypes.string

  };

export default Post;