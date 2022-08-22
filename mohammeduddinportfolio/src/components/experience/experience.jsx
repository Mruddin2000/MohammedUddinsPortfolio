import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
<section id='experience'> 
<h5>What Skils I Have</h5>
<h2>My Expereice</h2>
<div className='container experience_container'>
<div className='experience_frontend'>

  <h3>Frontend Development</h3>
  <div className='experience_content'>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>HTML</h4>
      <small className='text-light'>Experienced</small>
      </div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon' />
      <div><h4>CSS</h4>
      <small className='text-light'>Experienced</small>
</div>
          </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>JavaScripts</h4>
      <small className='text-light'>Intermediate</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>React</h4>
      <small className='text-light'>Beginmer</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>Java</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
  </div>
</div>

<div className='experience_frontend'>
  
  <h3>Backend Development</h3>
  <div className='experience_content'>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div><h4>Node JS</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>Java</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div><h4>Python</h4>
      <small className='text-light'>Intermediate</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>PhpMyAdminSql</h4>
      <small className='text-light'>Beginmer</small></div>
    </article>
    <article className='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
     <div> <h4>C#</h4>
      <small className='text-light'>Experienced</small></div>
    </article>
  </div>
</div>


</div>
</section>
 )
}

export default experience