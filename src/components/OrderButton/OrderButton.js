import React from 'react'
import './OrderButton.scss'

export default function OrderButton(props) {
    return(
        <button className='order-btn'>
            {props.text}
        </button>
    )
}