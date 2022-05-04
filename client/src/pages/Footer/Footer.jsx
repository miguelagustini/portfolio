
import React, { useState } from 'react';

import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({username:'', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {username, email, message} = formData;

  const handleChangeInput=(e)=>{
    const{name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () =>{
    setLoading(true);

    const contact={
      _type:'contact',
      username:formData.username,
      email:email,
      message: message
    }

    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
    <h2 className="head-text">Contact me!!</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={images.email} alt="email" />
        <a href="mailto:miguelagustini2015@gmail.com" className="p-text">miguelagustini2015@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="phone" />
        <a href="tel:+543482655021" className="p-text">+543482655021</a>
      </div>
    </div>
    {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your name" name="username" value={username} onChange={handleChangeInput} autoComplete="off"/>
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} autoComplete="off"/>
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Consultation"
            value={message}
            name="message"
            onChange={handleChangeInput}
            autoComplete="off"
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send message' : 'Sending...'}</button>
      </div>
    ) : (
      <div>
        <h3 className="head-text">
          Thanks for contacting me!
        </h3>
      </div>
    )}
  </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);