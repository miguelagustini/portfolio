import React from 'react'
import {BsWhatsapp, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a  href='https://wa.me/+543482655021' target="_blank">
            <BsWhatsapp/>
            </a>
        </div>

        <div>
            <a href='https://www.instagram.com/miguelagustini/' target="_blank">
            <BsInstagram/>
            </a>
        </div>

        <div>
        <a href='https://www.linkedin.com/in/miguel-agustini-61a025151/' target="_blank">
            <BsLinkedin/>
        </a>
        </div>

    </div>
  )
}

export default SocialMedia