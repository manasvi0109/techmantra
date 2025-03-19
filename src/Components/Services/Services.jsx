import React from 'react'
import './Services.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Custom Web Development</p>
            <h6>Scalable, fast, and secure websites crafted to meet your business needs.</h6>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>API Integration</p>
            <h6>Streamline your business operations with seamless API integrations.</h6>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>UI/UX Design</p>
            <h6>Transform your brand's digital presence with user-centered design solutions.</h6>
        </div>
      </div>
    </div>
  )
}

export default Programs
