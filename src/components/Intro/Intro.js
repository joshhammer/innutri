import React from 'react'
import './Intro.scss'
import OrderButton from '../OrderButton/OrderButton'
import claimExtern from '../../assets/png/claim_extern_black.png'
import beerenSoftgum from '../../assets/png/beeren_softgum.png'

export default function Intro() {
    return(
        <div className='intro-container'>
            <div className='intro-box intro-box-left'>

            </div>
            <div className='intro-box intro-box-middle'>
                <img className='improving-health-img' src={claimExtern} alt=""/>
                <img className='beeren-softgum-img' src={beerenSoftgum} alt=""/>
                <OrderButton text={'Jetzt Softgums Bestellen'}/>
            </div>
            <div className='intro-box intro-box-right'>

            </div>
        </div>
    )
}