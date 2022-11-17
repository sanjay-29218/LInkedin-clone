import React, { useEffect, useState, forwardRef } from 'react'
import './centersection.css'
import {MdPhotoSizeSelectActual} from 'react-icons/md'
import {MdOndemandVideo} from 'react-icons/md'
import {MdOutlineArticle} from 'react-icons/md'
import {BsCalendar4Event} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import Post from '../post/Post'
import {db} from './firebase'
import firebase from 'firebase/compat/app';
import {useSelector } from "react-redux";
import { selectUser } from '../../features/userSlice'
import {CgProfile} from 'react-icons/cg'
import FlipMove from 'react-flip-move';


const CenterSection = ({photoUrl}) => {
  const [posts,setPosts] = useState([]);
  const [input,setInput] = useState('');
  const user = useSelector(selectUser).user;
  useEffect(() =>{
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => setPosts(
      snapshot.docs.map(doc => ({
        id:doc.id,
        data:doc.data(),
      }))
    ))
  },[])



  function sendPost(e){
    e.preventDefault();
    db.collection('posts').add({
      name:user.displayName,
      description:user.email,
      message:input,
      photoUrl:user.photoUrl || '',
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }
  return (
    <section className='center-section'>
      <div className="center-section-post">
        <form action="">
          <div className="center-section-input-img">
          {photoUrl?<img src={photoUrl} alt=""  />:<CgProfile className='profile'/>}
          <input type="text" value={input} onChange={e=>setInput(e.target.value) } placeholder='Star a post' />
          <button onClick={sendPost}><FiSend/></button>
          </div>
          <div className="center-section-btns">
          <button><MdPhotoSizeSelectActual/>
          <small>Photo</small>
          </button>
          <button><MdOndemandVideo/><small>Video</small> </button>
          <button><BsCalendar4Event/><small>Event</small></button>
          <button><MdOutlineArticle/><small>Write article</small></button>
          </div>
        </form>
        
      </div>
      
      
      {/* <Post name='Sanjay Poudel' description='description' message='Here is my post message'/> */}
      <FlipMove>
      {posts.map(({id , data:{name,description,message,photoUrl}})=>(
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}

        />
      ))}
      </FlipMove>
      
      
    </section>
  )
}

export default CenterSection