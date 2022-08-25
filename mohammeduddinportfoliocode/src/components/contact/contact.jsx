import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jk0q91f', 'template_avhmh6h', form.current, 'iQwvzAeMo_koEdDye')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
         
      });
      e.target.reset()
      e.target.alert('Email has been sent')
  };
  return (
<section id='contact'>
  <h5>Get in touch</h5>
  <h2>Contact Me</h2>
  <div className='container contact_container'>
    <div className='contact_options'>
      <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>Hello@gmail.com</h5>
        <a href='mailto:MohammedUddin1420@gmail.com'>Send a message</a>
      </article>
      <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatsapp.com/send?phone=447533084984" target='_blank'>Send a message</a>
      </article>
    </div>
    {/*end of contact us*/}

    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required/>
    <input type='email' name='email' placeholder='Your Email Address' required/>
    <textarea name='message' rows='7' placeholder='Your Full Name' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>

    </form>
  </div>
</section>  )
}

export default Contact