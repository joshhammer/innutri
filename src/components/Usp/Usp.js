import React from 'react'
import './Usp.scss'
import OrderButton from '../OrderButton/OrderButton'
import ethisch from '../../assets/svg/01_ethisch_rot.svg'
import gelatineFrei from '../../assets/svg/01_glutenfrei_rot.svg'
import tasty from '../../assets/svg/01_tasty_rot.svg'

export default function Usp() {
    return(
        <div className='usp-wrapper'>
            <div className='usp-container'>
                <div className='usp-box'>
                    <img src={ethisch} alt="" />
                    <h3>Ethische Produktion</h3>
                    <p>Wir produzieren nur mit nachhaltigen, natürlichen Rohstoffen und so umweltschonend wie möglich. 
                        So helfen wir dabei, unseren Lebensraum und alle Lebewesen zu schützen. Gut für dich – 
                        gut für unseren Planeten.</p>
                </div>
                <div className='usp-box'>
                    <img src={gelatineFrei} alt="" />
                    <h3>Frei von Gelatine</h3>
                    <p>Unsere Produkte sind nicht nur natürlich, sondern auch komplett <span>vegan</span>. Denn nur, wenn wir auf 
                        tierische Produkte verzichten, können wir das Leben auf unserer Erde bestmöglichst schützen. </p>
                </div>
                <div className='usp-box'>
                    <img src={tasty} alt=""/>
                    <h3>Mit ganz viel Geschmack</h3>
                    <p>Nicht nur gesund, sondern auch lecker sind unsere Produkte. 
                        Denn was besser schmeckt, nehmen wir auch lieber zu uns - und tun uns dabei etwas Gutes.</p>
                </div>
            </div>
            <OrderButton text={'Jetzt Softgums Bestellen'}/> 
        </div>
    )
}