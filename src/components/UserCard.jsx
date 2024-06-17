import React from 'react'
import Tooltip from './Tooltip'
import card_img from '../assets/card_img.svg'

function UserCard({img=card_img, name='Andrii', job='Front-end developer', email='storchak850@gmail.com', phone='+38 (000) 000 00 00'}) {
  return (
    <div className='userCard'>
        <img src={img} alt="user_img" />
        <p className="userCard__name">{name}</p>
        <p className="userCard__info">
            <span>{job}</span>
            {/* <br /> */}
            <Tooltip text={email} tooltipText={email}/>
            {/* <br /> */}
            <span>{phone}</span>
        </p>
    </div>
  )
}

export default UserCard