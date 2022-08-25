import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'



const HeaderSocials = () => {
  return (
<div className='header_socials'>
    <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
    <a href='https://github.com' target="_blank"><FaGithub/></a>
    <a href='https://indeed.com' target="_blank"><SiIndeed/></a>

</div>
  )
}

export default HeaderSocials