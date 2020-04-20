import React from 'react'
import './Advertiser.scss'
import OrderButton from '../OrderButton/OrderButton'
import innutriDesktop from '../../assets/png/Innutri_Desktop@2x.png'

export default function Advertiser() {
    return(
        <div className='advertiser-container'>
            <img className='innutri-desktop-img' src={innutriDesktop} alt=""/>
            <OrderButton text={'Jetzt Softgums Bestellen'}/>
        </div>
    )
}