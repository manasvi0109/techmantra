import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>Who We Are</h3>
        <h2>Empowering businesses with cutting-edge tech solutions.</h2>
        <p>We are a passionate team of developers, designers, and innovators helping startups and enterprises build scalable digital products. From concept to launch, we bring technology and creativity together to drive success.</p>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  )
}

export default About
