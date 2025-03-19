import React, { useRef } from 'react'
import './Pricing.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'


const Pricing = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='pricing'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>Starter</h3>
                            <span>₹4,999/project</span>
                        </div>
                    </div>
                    <p>✔ Custom landing page
✔ Mobile responsive
✔ Contact form
❌ No API integration
❌ Support</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>Growth</h3>
                            <span>₹9,999/project</span>
                        </div>
                    </div>
                    <p>✔ 5-page website
✔ Custom UI/UX
✔ API integration
✔ Performance optimization
❌ Priority support</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">

                        <div>
                            <h3>Premium	</h3>
                            <span>₹14,999/project</span>
                        </div>
                    </div>
                    <p>✔ Up to 7 pages
✔ Custom integrations
✔ Advanced UI/UX
✔ SEO optimization
✔ Priority email support</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        
                        <div>
                            <h3>Enterprise</h3>
                            <span>₹25,999/project</span>
                        </div>
                    </div>
                    <p>✔ Unlimited pages
✔ Scalable architecture
✔ Dedicated support
✔ Custom post-launch service
✔ Real-time updates</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Pricing
