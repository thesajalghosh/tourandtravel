import React from 'react'
import './Hero.css'
import One from '../../assets/12.jpg'

const Hero = () => {
    return (
        <div className='hero' style={{ backgroundImage: `url(${One})` }}>
            <div className='hero__content'>
            <div className='all__content'>
                <div className='hero__heading'> Your Journey Your Story</div>
                <div className='hero__subtitle'>
                    Choose Your Favurite Destination
                </div>
                <button className='hero__button'>Travel Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Hero

