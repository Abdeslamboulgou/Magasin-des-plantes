import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Cart.css'

//je fais la destrecturation pour recuperer mes props en une ligne 
function Cart({cart,updateCart}) {
    

    // le hook useState Renvoie une valeur d’état local (cart) et une fonction (updateCart) pour la mettre à jour.
    // la première valeur renvoyée par useState sera toujours celle de l’état local le plus récent, une fois les mises à jour effectuées.

    // on va creer un autre variable d'etat on l'appel isOpen et on l'ai initialisé par (False) et une fonction setIsOpen
    const [isOpen , setIsOpen]=useState(false)
    const total =cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price , 0  )
    useEffect(() => {
        // Met à jour l'alerte  via l’API du navigateur
        //si je veux que l'alerte ne s'affiche que lorsque le total de mon panier change il me suffit d'ajoute la parametre [] (tableau des dependances)
      alert(` Welcome to the jungle house `)} , [])
    useEffect(() => {
        // Modifiez le titre de mon onglet
        document.title = `jungle-house: ${total} € of purchases `
    }, [total])
    // on utilise ici un condition ternair
      return isOpen ? (<div className="cart">
                <div className="cart-add-button">
                    <button className='cart-toggle-button' onClick={() => setIsOpen(false)}> Fermer </button>
                </div>   
            {cart.length > 0 ? (
             <div>
                <h1>Basket</h1>
                 
                      {cart.map(({  name, price ,amount}, index) => (
                        <div key={`${name}-${index}`}>
                             {name}  {price} * {amount}
                        </div>
                       ))}
                       
                 <p>Total : {total} $</p>
                 <button className="clear-button" onClick={() => updateCart([])}> Clear the basket  </button>

      </div>) : (
                  <div> your basket is empty </div>
			)}
            
            </div>    ) : ( <div className='cart-closed'>
                    <button className='cart-toggle-button' onClick={() => setIsOpen(true)}> Open shopping cart  </button>
                </div> 
      )
    } 
                

export default Cart