import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Cart.css'
import xbutton from '../assets/x-button.png'


//je fais la destrecturation pour recuperer mes props en une ligne 
function Cart({ cart, updateCart, total, setTotal }) {

    // le hook useState Renvoie une valeur d’état local (cart) et une fonction (updateCart) pour la mettre à jour.
    // la première valeur renvoyée par useState sera toujours celle de l’état local le plus récent, une fois les mises à jour effectuées.

    // on va creer un autre variable d'etat on l'appel isOpen et on l'ai initialisé par (False) et une fonction setIsOpen
    const [isOpen, setIsOpen] = useState(false)
    const [plants, setPlants] = useState()
    useEffect(() => {
        // Met à jour l'alerte  via l’API du navigateur
        //si je veux que l'alerte ne s'affiche que lorsque le total de mon panier change il me suffit d'ajoute la parametre [] (tableau des dependances)
        alert(` Welcome to the jungle house `)
    }, [])
    useEffect(() => {
        // Modifiez le titre de mon onglet
        document.title = `jungle-house: ${total} € of purchases `
    }, [total])
    // on utilise ici un condition ternair
    function RemovePlant(name) {
        const newPlant = plants.filter((plant) => plant.name !== name)
        setPlants(newPlant)

    }

    return isOpen ? (<div className="cart">
        <div className="cart-add-button">
            <button className='cart-toggle-button' onClick={() => setIsOpen(false)}><img className="butn" src={xbutton} alt='close basket' />
            </button>
        </div>
        {cart.length > 0 ? (
            <div>
                <h1>Basket</h1>

                {cart.map(({ name, price, amount }, index) => (
                    <div key={`${name}-${index}`}>
                        <table>
                            <tr className='cart_list'>
                               <td> {name}</td>
                               <td>{price} * {amount} </td>
                               <td><button className="remove" onClick={() => RemovePlant(name)}>X</button></td>
                            </tr>           
                        </table>
                    </div>

                ))}
                <p>Total : {setTotal(total)}$</p>
                <button className="clear-button" onClick={() => updateCart([])}> Clear the basket  </button>

            </div>) : (
            <div> your basket is empty </div>
        )}

    </div>) : <div>( <div className='cart-closed'>
        <button className='cart-toggle-button' onClick={() => setIsOpen(true)}> Open shopping cart  </button>
    </div>
        )
    </div>

}


export default Cart