import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/website.png'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/app.jpg'
import IMG4 from '../../assets/netbeans.png'
import IMG5 from '../../assets/android.jpg'
import IMG6 from '../../assets/firstpic.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "",
    link: <a href='pics.html'></a>,
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: "",
    link: "",
    demo: ""
  },
  {
    id: 3,
    image: IMG3,
    title: "",
    link: "",
    demo: ""
  },
  {
    id: 4,
    image: IMG4,
    title: "",
    link: "",
    demo: ""
  },
  {
    id: 5,
    image: IMG5,
    title: "",
    link: "",
    demo: ""
  },
  {
    id: 6,
    image: IMG6,
    title: "",
    link: "",
    demo: ""
  },
]
const portfolio = () => {
  return (
<section id='portfolio'>
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>

  <div className='container portfolio_container'>
{
  data.map(({id, image,title, link, demo}) =>{
    return (
      <article className='portfolio_item'>
  <div className='portfolio_item-image'>
    <img src={image} alt={title}/>
  </div>
  <h3>{title}</h3>
  <div className='portfolio_item-cta'>
  <a href={link} className='btn' target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
  </div>

</article>

    )
  })
}
  </div>
</section>  )
}

export default portfolio