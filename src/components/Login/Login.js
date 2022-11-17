import React, { useState } from 'react'
import './login.css'
import {BsLinkedin} from 'react-icons/bs'
import { auth } from '../centersection/firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [profilePic,setProfilePic] = useState('');

    const dispath = useDispatch();
    function register(){
        if(!name){
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispath(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                }))
            })
        })
        .catch((error)=>alert(error))
    }


    

    function loginToApp(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispath(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            })) 
        }).catch((error)=>alert(error))
    }

  return (
    <div className='login'>
        <div className="login-header">
            <div className="login-header-logo"><BsLinkedin/></div>
            <div className="login-header-slogon">Make the Most of your professional life</div>
        </div>
        <form action="" className="login-form">
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' value={name} onChange={e=>setName(e.target.value)} placeholder='Full name' />
                <label htmlFor="url">Photo URL</label>
                <input type="text" id='url' value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder='Your photo URL' />
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='xyz@xyz.com' />
                <label htmlFor="password">Password(6 or more Character)</label>
                <input type="password" id="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='password' />
                <button onClick={loginToApp}>Agree & Join</button>
                <p>Not a member ? <span className='login-register' onClick={register}>Register Now</span></p>
            </form>
    </div>
  )
}

export default Login