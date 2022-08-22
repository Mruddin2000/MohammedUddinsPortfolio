import React from 'react'
import './about.css'
import ME2 from '../../assets/secondpic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
<section id="about">
  <h5>Get to know</h5>
  <h2>About me</h2>

  <div className="container about_container">
    <div className="about_me">
      <div className="about_me-image">
        <img src={ME2} alt="Picture of me"/>
      
      </div>
    </div>

<div className="about_content">
<div className="about_cards">
  <article className="about_card">
    <FaAward className="about_icon"/>
    <h5>Experience</h5>
    <small>3+ Years Working</small>
  </article>
  <article className="about_card">
    <FiUsers className="about_icon"/>
    <h5>Experience</h5>
    <small>3+ Years Working</small>
  </article>
  <article className="about_card">
    <VscFolderLibrary className="about_icon"/>
    <h5>Experience</h5>
    <small>3+ Years Working</small>
  </article>
  </div>
  <p>
    jidjialsjkla cklcjxs aljdaskl ndaskln jasnd ljasdjlknckasn djlasn dlxncl jsalidjasilj dklasm xclandlksanldkasn,mcnaklxn klscn laks ndilasj dla nkjcsdn,mv dkjn ckjn ckjasn dkjas nckjckj; adn ckjxckj c,mn c,jn kj cn askjcnakjcmnakj db nkjsacbaksj,m cn,jmcb,jzxmbc kjas,bcakjdscb nakj,cmbzjkjbckjbckjz,xmcnckjz,mcbdskjv,b k
  </p>
  <a href='#contact' className='btn btn-primary'>Contact Me</a>
</div>
  </div>
</section>
  )
}

export default about