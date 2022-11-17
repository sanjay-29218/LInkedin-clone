import React from 'react'
import {CgProfile} from 'react-icons/cg'
import './recommendation.css'
const Recommendation = ({name,profession}) => {
  return (
    
        <div className="right-section-recommendation">
        
        <div className="right-section-recommendation-body">
        <div className="right-section-recommendation-header"><CgProfile className='profile'/>
    <div className="right-section-recommendation-name">{name}</div></div>
          
          <div className="right-recommendation-profession">{profession}</div>
        <button className='right-recommendation-follow-btn'>Follow</button>
        </div>
        
      </div>
    
  )
}

export default Recommendation