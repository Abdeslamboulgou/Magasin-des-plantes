import React from "react";
import '../styles/PlantItem.css'
import CareEchel from "./CareEchel";
function PlantItem({ id, cover, name, water, light, price }){
  function handleClic(plantName) {
    
    alert(`You want to buy a ${plantName} ? very good choice ,  click on Add Up 🌱✨`)
  }
          return ( <div className="zoom">
            <li key={id} className='plant-item' onClick={() => handleClic(name)}>
               <span className='plant-item-price'> {price} €</span>
			         <img className='plant-item-cover' src={cover} alt={`${name} cover`} />
			          {name}
                       <div>
                  	    <CareEchel  careType='water' echelValue={water} />
			                  <CareEchel  careType='light' echelValue={light} />
                       </div>
                       </li>
                       </div>
)

}

export default PlantItem