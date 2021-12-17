import React from 'react';
import '../styles/Banner.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

// Créer le premier composant Banner (le header) qui contient le nom de notre magasin 'the jungle house'
const Banner = () => {
    const titre = "jungle house"
    return (<div className="banner">
        <div className="nav_bar">
            <div className='about'><NavLink style={{ textDecoration: 'none' }} exact to="/" activeClassName='active-nav' >
                Home
            </NavLink></div>
            <div className='products'><NavLink style={{ textDecoration: 'none' }} exact to="products" activeClassName='active-nav' >
                Products
            </NavLink></div>
            <div className='contact'><NavLink style={{ textDecoration: 'none' }} exact to="contact" activeClassName='active-nav' >
                Contact
            </NavLink></div>
        </div>
        <img src={logo} alt='La maison jungle' className='logo' />
        <h1 className="title">{titre.toUpperCase()}</h1>
    </div>)

}
export default Banner