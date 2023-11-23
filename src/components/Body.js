import React, { useEffect, useState } from 'react';
import '../css/Body.css';
import Res_card from './Res_card';
import Shimmer from './Shimmer';

function Body() {
  const [resdata,setResdata]=useState([]);
  useEffect(()=>{
    fetchdata()
  },[])

  async function fetchdata(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsondata=await data.json();
    const reqdata= await jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    setResdata(reqdata);
  }

  if(resdata.length==0){
    return(
      <Shimmer />
    )
  }

  return (
    <div className='body'>

    {resdata.map((res)=>{
      
      return (<Res_card 
      data={res.info}
      />)
    })}
    
    
    </div>
  )
}

export default Body
