import React from 'react'
import { preloader } from '../../../asses/img/preloader.svg';
import s from './preloader.module.css'

let Preloader = () => {

    return (
        <div className={s.preloader}>
            <img src={preloader} alt='' />
        </div>

    )
}

export default Preloader;