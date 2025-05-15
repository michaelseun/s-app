import React from 'react'
import feature1 from "./feature1.jpg"
import feature2 from "./feature2.jpg"
import feature3 from "./feature3.jpg"
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div className="features ">
        <div className="feature"> 
            <img src={feature1} alt="" />
            <div className="caption">
            <svg className="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2" stroke-width="0.9" stroke="currentColor" />
            </svg>
              
                <p>Curated Learning Resources</p>
            </div>
     
        </div>
        <div className="feature"> 
            <img src={feature2} alt="" />
            <div className="caption">
                <svg className="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4l.11-.94L5 5.5L12 2l7 3.5v5h-1V6l-2.11 1.06zm-4 6c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                </svg>
               
                <p>Interactive Learning Experiences</p>
            </div>
        </div>
        <div className="feature"> 
            <img src={feature3} alt="" />
            <div className="caption">
            <svg className="img"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 17h-4v-7h4m1-2h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 6h18V4H4a2 2 0 0 0-2 2v11H0v3h14v-3H4z" stroke-width="0.9" stroke="currentColor" />
            </svg>
                
                <p>Mobile-Friendly Experience</p>
            </div>
        </div>
     </div>
  )
}

export default SecondSection
