import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value }); // creates an obj and destructures all current values and dynamically changes the name to equal specific value
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    //sanity setup guidelines
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <React.Fragment>
      <h2 className='head-text'>
        Take a coffee & chat with me
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className='p-text'>hello@micael.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+387 (51) 000 000" className='p-text'>+387 (51) 000 000</a>
        </div>
      </div>

{!isFormSubmitted ? 
      <form className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" name='name' placeholder='Ime' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" name='email' placeholder='Vaš email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea className='p-text' placeholder='Sadržaj poruke' value={message} name='message' onChange={handleChangeInput}></textarea>
        </div>
        <button className='p-text' type='button' onClick={handleSubmit}>{ loading ? 'Slanje ... ' : 'Pošalji poruku'}</button>
      </form>
: <div>
  <h3 className='head-text'>Thank you getting in touch</h3>
</div> }
    </React.Fragment>
  )
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  );
