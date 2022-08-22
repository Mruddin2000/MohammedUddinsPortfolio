import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/firstpic.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
<header>
  <div className="container header_container">
    <h5>Hello I'm </h5>
    <h1>Mohammed Rafat Uddin</h1>
    <h5 className="text-light">Software Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className='me'>
      <img src={ME} alt = "My Picture"/>

    </div>

    <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
</header>  )
}

export default header