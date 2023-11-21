import React from 'react';
import '../css/Body.css';
import Res_card from './Res_card';
import { data } from '../utils/api_data';
// let data=[
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// {name:"Meghana-food",rating:4.2,cuisines:"Biryani Andhra South Indian"},
// ]
function Body() {
  return (
    <div className='body'>

    {data.map((res)=>{
      return (<Res_card 
      data={res}
      />)
    })}
    
    
    </div>
  )
}

export default Body
