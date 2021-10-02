import React,{useState}  from "react"
import { plantList } from "../datas/plantList"
import '../styles/ShopingPlant.css'
import PlantItem from "./PlantItem"
import Categories from "./Categories"


function ShopingPlant({cart,updateCart}){

    const [activeCategory, AffichePlant] = useState('')

    // array includes permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.

    // La méthode concat() est utilisée afin de fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
     //  const categories = plantList.reduce((acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
     const categories = plantList.reduce((acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),[])
     
    function addToCart(name, price) {
        
        // on verifier si la plante est existe avec la methode find
        const currentPlantSaved = cart.find((plant) => plant.name === name)

             // si elle est existe
             if (currentPlantSaved) {
                 
                // La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
                 // on creer ici un nouveau tableau sans la plante qu'ona chercher au debut , avec la methode filter
                 const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)

                 // (...) le spread operator
                 updateCart([...cartFilteredCurrentPlant,{ name, price, amount: currentPlantSaved.amount + 1 }])
                                                 
             } else {
                       updateCart([...cart, { name, price, amount: 1 }])
                    }
    }
                                   
    return(
        // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
        <div className='shopping-list'>
            <Categories
				categories={categories}
				AffichePlant={AffichePlant}
				activeCategory={activeCategory}
			/>
            <ul className='plant-list'>
				{plantList.map(({ id, cover, name, water, light,price , category }) => !activeCategory || activeCategory === category ?  (
                    <div key={id}>
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
                        price={price}
					/>
						<button className="add-button" onClick={() => addToCart(name, price)}>Add Up</button>
                    </div>
				) : null 
                )} 
			</ul>
    </div>
    )
}
export default ShopingPlant