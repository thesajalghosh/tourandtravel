import React from 'react'
import Card from "../Card/Card"
import './Recent.css'
import Six from '../../assets/2.jpg'
import Seven from '../../assets/3.jpg'
import Eight from '../../assets/4.jpg'

const Recent = () => {

    const title1 = "Trips in Indonesia"
    const title2 = "Trips in Malasia"
    const title3 = "Trips in Srilanka"

    const des1 = "Indonesia is a beautiful country with many places to visit and things to do. Here are some of the top trips you can take in Indonesia: Bali, Yogyakarta"
    const des2 = "Indonesia is a beautiful country with many places to visit and things to do. Here are some of the top trips you can take in Indonesia: Bali, Yogyakarta"
    const des3 = "Indonesia is a beautiful country with many places to visit and things to do. Here are some of the top trips you can take in Indonesia: Bali, Yogyakarta"


  return (
    <div className='recent'>
    <div className='recent__container'>
    <div className='recent__heading'>Recent Trips</div>
    <div className='recent__subtitle'>You can discover unique destination using Google Maps</div>
    <div className='cards'>
    <Card image={Six} title={title1} des={des1}/>
    <Card image ={Seven} title={title2} des={des2}/>
    <Card image={Eight} title={title3} des={des3}/>

    </div>
    </div>
    </div>
  )
}

export default Recent
