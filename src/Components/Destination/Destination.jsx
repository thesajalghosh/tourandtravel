import React from 'react'
import Two from "../../assets/9.jpg"
import Three from "../../assets/11.jpg"
import four from "../../assets/6.jpg"
import five from "../../assets/8.jpg"

import './Destination.css'

const Destination = () => {
  return (
    <div className='destination'>
      <div className='destination__content'>
        <div className='destination__heading'>
          Popular Destination
        </div>
        <div className='destination__subtitle'>
          Tours give you the opportunity to see a lot, within a time frame.
        </div>
      </div>
      <div className='gallery'>
        <div className='upper__gallery'>
          <div className='left__part'>
            <div className='part__heading'>Taal Volcano,  Batangas</div>
            <div className='part__para'>Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is known for its unique location within a lake and is often referred to as the world's smallest active volcano.The volcano is situated on the island of Volcano Island, which is located in the middle of Taal Lake. The lake itself is situated within a larger caldera, which was formed by a massive eruption thousands of years ago.</div>

          </div>
          <div className='right__part'>
            <div className='left__image'><img className='leftImg' src={Two} alt="leftImage" /></div>
            <div className='right__image'><img className='rightImg' src={Three} alt='rightImage' /></div>
          </div>
        </div>
        <div className='lower__gallery'>
          <div className='left__part img__part'>
          <div className='left__image '><img className='leftImg lower__left' src={four} alt='leftimage' /></div>
            <div className='right__image'><img className='rightImg  lower__right' src={five} alt='rightimage' /></div>
          </div>
          <div className='right__part content__part'>
          <div className='part__heading'>Taal Volcano,  Batangas</div>
            <div className='part__para'>Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It is known for its unique location within a lake and is often referred to as the world's smallest active volcano.The volcano is situated on the island of Volcano Island, which is located in the middle of Taal Lake. The lake itself is situated within a larger caldera, which was formed by a massive eruption thousands of years ago.</div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination

