import React from 'react'
import Eleven from '../../assets/4.jpg'
import './Service.css'
import Recent from '../../Components/Recent/Recent'

const Service = () => {
  return (
    <div className='service'>
      <div className='service__container'>
        <div className='service__hero' >
          <img src={Eleven} alt='service__image' className='service__image' />
          
        </div>
        {/* <div className='service__heading'>Our Services</div> */}
        <Recent/>
      </div>


    </div>
  )
}

export default Service
