import React from 'react';
import '../css/Res_card.css';

function Res_card(props) {
 
  const {name,avgRating,cuisines,cloudinaryImageId}=props.data

  
  return (
    <div className='res-card'>
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" className='res-card-img'/>
      <div className="res-info">
      <h3 className='res-name'> {name}</h3>
      <div className="rating">
      <p className='star'>Rating: </p>
      <p className='num-rating'>{avgRating}</p>
      </div>
      <p className='cuisines'>{cuisines.join(",")}</p>
      </div>
    </div>
  )
}

export default Res_card
