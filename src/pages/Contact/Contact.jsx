import React from 'react'
import './Contact.css'
import Twelve from '../../assets/1.jpg'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__image' style={{ backgroundImage: `url(${Twelve})` }}>
          <div className='page__name'>Contact Us</div>
        </div>
      </div>
      <div className='contactus__heading'>Send A message to Us</div>
      <div className='form'>
        <input placeholder='Name' className='input'/>
        <input placeholder='Email' className='input'/>
        <input placeholder='Subject' className='input'/>
        <input placeholder='Message' className='input message'/>
        <button className='btn colorChange'>Send</button>
      </div>

    </div>
  )
}

export default Contact
