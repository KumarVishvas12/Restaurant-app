import React from 'react';
import '../css/Res_card.css';
import { RES_IMG_URL } from '../utils/constants';

let data=[
  { res:{
    name:"KFC",
    rating:4.1,
    cuisines:['Biryani Andhra South Indian']
  }}


]

// Biryani Andhra South Indian

function Res_card(props) {
  // {{name,rating,cuisines}={props.data}}
  console.log(props.data)
  const {name,rating,cuisines}=props.data
  
  return (
    <div className='res-card'>
    <img src={RES_IMG_URL} alt="" className='res-card-img'/>
      <div className="res-info">
      <h1 className='res-name'> {name}</h1>
      <div className="rating">
      <p className='star'>star</p>
      <p className='num-rating'>{rating}</p>
      </div>
      <p className='cuisines'>{cuisines}</p>
      </div>
    </div>
  )
}

export default Res_card
