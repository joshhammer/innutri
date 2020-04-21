import React from 'react'
import './Advertiser.scss'
import OrderButton from '../OrderButton/OrderButton'

export default function Advertiser() {
    return(
        <div className='advertiser-container'>
            <OrderButton text={'Jetzt Softgums Bestellen'}/>
        </div>
    )
}