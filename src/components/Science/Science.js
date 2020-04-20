import React from 'react'
import './Science.scss'
import OrderButton from '../OrderButton/OrderButton'

export default function Science() {
    return(
        <div className='science-wrapper'>
            <div className='science-image-container'>

            </div>
            <div className='science-list-container'>
                <h2>Wissenschaft</h2>
                <ul>
                    <li>
                        Vitamin B12 ist das Allround-Talent unter den Vitaminen: Es spielt in vielen Stoffwechselvorgängen 
                        eine entscheidende Rolle und sorgt für starke Nerven.</li>
                    <li>
                        Zink bringt den Glow: Es ist wichtig für ein starkes Immunsystem 
                        und sorgt für eine reine und gesunde Haut.</li>
                    <li>
                        Biotion macht stark: Biotin hilft dem Nervensystem dabei, normal zu funktionieren 
                        und sorgt für starke Nägel und glänzende Haare.
                    </li>
                </ul>
                <OrderButton text={'Jetzt Softgums bestellen'}/>
            </div>
        </div>
    )
}