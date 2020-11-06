import React from 'react'

const Card = ({username, name, email, image}) => (

    <div className='mt-3 border border-primary rounded py-1 px-1 text-white text-center' style={{"boxShadow": "3px 3px 5px #333, -3px -3px 5px #333"}}>
        <img src={`${image}${username}?150x150 `} alt='robot'/>
        <div>
          <h3>{username}</h3>
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
    </div>
)
export default Card;