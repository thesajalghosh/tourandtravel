import React from 'react'
import One from "../../assets/1.jpg"
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__image'>
                <img src={One} alt='homepage' className='homepage__image' /> </div>
            <div className='home__contents'>
                <div className='contents'>
                    <p className='home__heading'>Your Journey Your Story</p>
                    <p className='home__subtitle'>Choose Your Favourite Destination</p>
                    <button>Travel Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Home
