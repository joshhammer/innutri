import React from 'react'
import './Footer.scss'
import logo from '../../assets/svg/00_innutri_logo_rgb.svg'
import linkedIn from '../../assets/svg/04_sm_linkedin.svg'
import facebook from '../../assets/svg/04_sm_facebook.svg'
import instagram from '../../assets/svg/04_sm_instagram.svg'
import youtube from '../../assets/svg/04_sm_youtube.svg'

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-address-box'>
                    <p><strong>innutrigel AG</strong></p>
                    <p>Wagistrasse 4</p>
                    <p>8952 Schlieren</p>
                    <p>Switzerland</p>
                    <a href="mailto:info@innutrigel.ch">info@innutrigel.ch</a>
                </div>
                <div className='footer-impressum'>
                    <a href='#'>Impressum</a>
                </div>
                <img className='footer-logo' src={logo} alt="innutri-logo" />
                <div className='footer-follow'>
                    <p>Folgen Sie uns</p>
                    <div className='icon-box'>
                        <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer">
                            <img src={linkedIn} alt="linkedIn-logo"/>
                        </a>
                        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
                            <img src={facebook} alt="facebook-logo"/>
                        </a>
                        <a href="https://www.youtube.com" target='_blank' rel="noopener noreferrer">
                            <img src={youtube} alt="youtube-logo"/>
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                            <img src={instagram} alt="instagram-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}