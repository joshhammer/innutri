import React from 'react'
import './Products.scss'
import produkte from '../../assets/png/Produkte_Innutri_Desktop@2x.png'
import OrderButton from '../OrderButton/OrderButton'

export default function Products() {
    return (
        <div className='products-wrapper'>
            <div className='products-slogan-container'>
                <div className='products-backdrop'></div>
                    <h1>Mehr Produkte <br />für ein gesundes <br /> Leben</h1>
            </div>
            <div className='products-image-container'>
                <img src={produkte} alt="innutri-fläschchen"/>
                <OrderButton text={'Zu den Produkten'} />

            </div>
        </div>
    )
}