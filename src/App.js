import React, { useState,useEffect } from 'react';
import './App.css';
import Banner  from './components/Banner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import '../src/styles/layout.css'
import ShopingPlant from './components/ShopingPlant';
function App() {
     const [isFooterShown , updateFooter]=useState(true)
     const savedCart = localStorage.getItem('cart')
     const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
     const [total , setTotal] =useState(cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price , 0 ))
     //pour la lecture de l'article localStorage (  localStorage.getItem()  )
     useEffect(() => {
       // sauvegarder le panier à chaque modification 
       localStorage.setItem('cart', JSON.stringify(cart))
     }, [cart])
     return (
       // pour ajouter un lien entre les components Cart et ShopingList
              // je passe cart et updateCart en props
         <div>
              <Banner/> 


            <div   className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart}/>
              <ShopingPlant cart={cart} updateCart={updateCart}/>
              </div>
            <div>
                <button className="hide-button" onClick={() => updateFooter(!isFooterShown)}>
                        To hide
                </button>
                {isFooterShown && <Footer total={total} setTotal={setTotal}/>}
            </div>

          </div>
    
  );
}


export default App;
