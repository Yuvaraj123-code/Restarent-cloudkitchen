import React, { useContext } from 'react'
import  './Fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'




const Fooddisplay = ({category})=>{




    const{food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
       <div className="food-display-list">
        {food_list.map((item,index)=>{
            // eslint-disable-next-line no-undef
            
            if(category==="All" || category===item.category){
                return  <FoodItem key={index} id={item._id} name={item.name} description={item.description}  price={item.price} image={item.image}/>


            }

        })}
       </div>
    </div>
  )
}

export default Fooddisplay