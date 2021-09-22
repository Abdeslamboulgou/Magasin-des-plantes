import React from 'react';
import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
        const titre="jungle house"
        return (<div className="banner">
            <img src={logo} alt='La maison jungle' className='logo' />
            <h1 className="title">{titre}</h1>
        </div>)
    
}
export default Banner