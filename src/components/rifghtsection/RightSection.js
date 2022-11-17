import React from 'react'
import './rightsection.css'
import {CgProfile} from 'react-icons/cg'
import Recommendation from './Recommendation'
function RightSection() {
  return (
    <section className='right-section'>
      <div className="right-section-header">
        <h3>Add to your feed</h3>
      </div>
      <Recommendation name={'Sanjay'} profession={"Software Engineer"} />
      <Recommendation name={'Ajay'} profession={"Doctor"} />
      <Recommendation name={'Shishir'} profession={"Teacher"} />
    </section>
  )
}

export default RightSection