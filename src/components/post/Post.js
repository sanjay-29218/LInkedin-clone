import React,{useState,forwardRef} from 'react'
import './post.css'
import {AiTwotoneLike} from 'react-icons/ai'
import {TfiCommentAlt} from 'react-icons/tfi'
import {BiRepost} from 'react-icons/bi'
import {RiSendPlaneFill} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
const Post = forwardRef(({name,description,message,photoUrl},ref) => {

    

  return (
    <div ref={ref} className='post-section'>
       <div className="post-section-header">
       {photoUrl?<img src={photoUrl} alt=""  />:<CgProfile className='profile'/>}
       <div className="post-section-bio"><a href="">{name}</a>
       <p>{description}</p></div>
       </div>
       <div className="post-body">
        <div className="post-body-message">
        <p>{message}</p>
        </div>
        <div className="post-body-btn">
        <button><AiTwotoneLike/><small>Like</small></button>
        <button><TfiCommentAlt/><small>Comment</small></button>
        <button><BiRepost/><small>Repost</small></button>
        <button><RiSendPlaneFill/><small>Send</small></button>
        
        </div>
       </div>
    </div>
  )
})

export default Post