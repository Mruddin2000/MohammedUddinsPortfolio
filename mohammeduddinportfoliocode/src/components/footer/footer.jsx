import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'

const footer = () => {
  return (
<footer>
  <a href='#' className='footer_logo'>Mohammed Uddin's Portfolio</a>
  <ul className='permalinks'>
    <li><a href='#'>Home</a></li>

    <li><a href='#about'>About</a></li>

    <li><a href='#experience'>Experience</a></li>

    <li><a href='#Portfolio'>Portfolio</a></li>

    <li><a href='#contact'>Contact</a></li>
  </ul>

  <div className='footer_socials'>
  <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com' target="_blank"><FaGithub/></a>
    <a href='https://indeed.com' target="_blank"><SiIndeed/></a>

  </div>

  <div className='footer_copyright'>
    <small>&copy; Mohammed Uddin's Portfolio. All rights reserved.</small>
  </div>
</footer>
  )
};

export default footer