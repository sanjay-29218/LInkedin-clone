import './nav.css'
import React from 'react'
import { BsLinkedin, BsSearch, BsPeopleFill } from 'react-icons/bs'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'
import { CgProfile } from 'react-icons/cg'
import Icon from './Icon'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../centersection/firebase'



function Nav() {
    const user = useSelector(selectUser).user;
    const dispatch = useDispatch();

    const logoutApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (

        <div className='header'>
            <div className="header-left">
                <BsLinkedin style={{
                    color: 'rgb(10 102 194)',
                    fontSize: '2rem',
                    marginRight: '1rem',
                    marginLeft: '10rem',
                }} />
            </div>
            <div className="header-search">
                <BsSearch style={{
                    fontSize: '1rem',
                }} />
                <input type="text" style={{
                    padding: '0.5rem',
                }} />
                <div className="header-icons">
                    <Icon icon={<BsPeopleFill />} iconName={"My Network"} />
                    <Icon icon={<MdOutlineHomeRepairService />} iconName={"Jobs"} />
                    <Icon icon={<AiOutlineMessage />} iconName={"Messaging"} />
                    <Icon icon={<GrNotification />} iconName={"Notifications"} />
                    <Icon icon={<CgProfile />} iconName={"Me"} onClick={logoutApp} />
                </div>
            </div>

        </div>

    )
}

export default Nav