import React, { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Cart.css'


//je fais la destrecturation pour recuperer mes props en une ligne 
function Cart({ cart, updateCart, total, setTotal }) {

    // le hook useState Renvoie une valeur d’état local (cart) et une fonction (updateCart) pour la mettre à jour.
    // la première valeur renvoyée par useState sera toujours celle de l’état local le plus récent, une fois les mises à jour effectuées.

    // on va creer un autre variable d'etat on l'appel isOpen et on l'ai initialisé par (False) et une fonction setIsOpen
    const [isOpen, setIsOpen] = useState(false)
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

    // fontion RemovePlant sert a supprimer un item sur le composant cart
    const RemovePlant = item => {
        const allPlants = [...cart];

        // supprimer element avec splice
        allPlants.splice(item, 1);
        console.log(allPlants)

        // modifier la cart
        updateCart(allPlants)

    }

    return isOpen ? (<div className="cart">
        <div className="cart-add-button">
            <button className='cart-toggle-button' onClick={() => setIsOpen(false)}><i style={{ cursor: 'pointer' }} className='fa fa-times-circle' ></i>
            </button>
        </div>
        {cart.length > 0 ?
            <div>
                <h1>Basket</h1>
                {cart.map(({ name, price, amount }, index) => (
                    <div>
                        <table>
                            <tr key={index}>
                                <td> {name}</td>
                                <td>{price} * {amount} </td>
                                <td><button className="remove" onClick={() => RemovePlant(index)}> X </button></td>
                            </tr>
                        </table>
                    </div>

                ))}
                <hr />
                <p className='total'>Total : {cart.reduce((amount, item) => item.price + amount, 0)} $</p>
                <hr />
                <span><button className="clear-button" onClick={() => updateCart([])}> Clear basket  </button>
                </span>
                <span><button className="buy-button" > Buy Now  </button>
                </span>

            </div> : (
                <div className='empty'> your basket is empty </div>
            )}

    </div>) : <div> <div className='cart-closed'>
        <button className='cart-toggle-button' onClick={() => setIsOpen(true)}> Open shopping cart  </button>
    </div>
    </div>

}


export default Cart