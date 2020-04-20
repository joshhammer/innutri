import React from 'react'
import './Header.scss'
import logo from '../../assets/svg/00_innutri_logo_rgb.svg'

export default function Header() {
    return(
            <header>
                <img className='logo' src={logo} alt=""/>
            </header>
    )
}