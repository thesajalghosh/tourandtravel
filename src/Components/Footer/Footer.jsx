import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='upper__part'>
                    <div className='upper_left_part'>
                        <div className='logo'>LOGO</div>
                        <div className='tagline'>Choose Your Favourite Destination</div>
                    </div>
                    <div className='upper_right_part'>
                        <AiFillFacebook size={30}/>
                        <BsInstagram size={30}/>
                        <FaRedditAlien size={30}/>
                        <AiOutlineTwitter size={30}/>
                    </div>
                </div>
                <div className='lower__part'>
                    <div className='project'> 
                    <div className='heading'>Project</div>
                    <div className='item'>Changelog</div>
                    <div className='item'>Status</div>
                    <div className='item'>License</div>
                    <div className='item'>All Versions</div>
                    </div>

                    <div className='community'>
                    <div className='heading'>Community</div>
                    <div className='item'>GIthub</div>
                    <div className='item'>Instagram</div>
                    <div className='item'>Twitter</div>
                    <div className='item'>Discord</div>
                    </div>
                    <div className='Help'>
                    <div className='heading'>Help</div>
                    <div className='item'>Support</div>
                    <div className='item'>Troubleshooting</div>
                    <div className='item'>Contack</div>
                    
                    </div>
                    <div className='others'>
                    <div className='heading'>other</div>
                    <div className='item'>Terms of Service</div>
                    <div className='item'>Privacy Policy</div>
                    <div className='item'>License</div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
