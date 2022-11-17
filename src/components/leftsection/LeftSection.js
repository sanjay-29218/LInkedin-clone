import React from 'react'
import './leftsection.css'
import {BsBookmark} from 'react-icons/bs'
import {selectUser} from '../../features/userSlice'
import { useSelector } from 'react-redux'
function LeftSection() {
  const select = useSelector(selectUser)
  const user = select.user
  return (
    <section className='left-section-container'>
        <img src={user.photoUrl} alt="" className='avatar-img' />
        <div className='left-section-profile'> 
        <div className='left-section-profile-detail'>
          <h3>{user.displayName}</h3>
          {/* <h5>Student</h5> */}
        </div>
        <hr />
      </div>
      <div className="left-section-container-connection">
        <small>Connections</small>
        <h5>Grow your network</h5>
      </div>
      <div className="left-section-container-myitems">
        <h5>My items</h5>
        <BsBookmark/>
      </div>
      <div className='discover'>
        <a href='#' className="discover-content">Groups</a>
        <a href='#' className="discover-content">Events</a>
        <a href='#' className="discover-content">Followed Hashtags</a>
        <div href='#' className="left-section-container-connection">
        <small>Connections</small>
        <h5>Grow your network</h5>
        </div>
      </div>

    </section>
  )
}

export default LeftSection