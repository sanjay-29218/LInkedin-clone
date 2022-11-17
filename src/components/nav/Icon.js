import React from 'react'
import './Icon.css'

const Icon = ({icon,iconName,onClick}) => {
  

  return (
   
            <div className="icon" onClick={onClick}>
            {icon?icon:'...'}
            <div className='title'>{iconName}</div>
            </div>
  )
}

export default Icon