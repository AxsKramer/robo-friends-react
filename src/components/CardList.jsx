import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cardArray = robots.map((robot,i) => {
        return <Card 
                key={robot.id} 
                username={robot.username} 
                name={robot.name} 
                email={robot.email} 
                image='https://robohash.org/'
             />
    })

    return (
        <div className='d-flex justify-content-around flex-wrap'>
            {cardArray}
        </div>
      );
}
 
 
export default CardList;