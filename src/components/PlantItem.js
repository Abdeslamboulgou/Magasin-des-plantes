import React from "react";
import '../styles/PlantItem.css'
import CareEchel from "./CareEchel";


function PlantItem({ id, cover, name, water, light, price }){
  function handleClic(plantName) {
    
    alert(`You want to buy a ${plantName} ? very good choice ,  click on Add Up 🌱✨`)
  }
          return ( <div className="zoom">
            <li key={id} className='plant-item'>
               <span className='plant-item-price'> {price} €</span>
             <div className="plant-item-icon">
               {/* on peut utiliser le variable cover dans un élément img pour afficher l'image quel contient */}
			         <img className='plant-item-cover' src={cover} alt={`${name} cover`}  onClick={() => handleClic(name)}/>
               <div class="overlay">
                        <i class="fas fa-shopping-bag"></i>
                        <i class="far fa-heart"></i>
                        <i class="fas fa-search"></i>
                    </div>
                {name}
                </div>
                       <div>
                  	    <CareEchel  careType='water' echelValue={water} />
			                  <CareEchel  careType='light' echelValue={light} />
                       </div>
                       </li>
                       </div>
)

}

export default PlantItem