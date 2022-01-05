import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ShopingPlant from '../components/ShopingPlant';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

function Products() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [total, setTotal] = useState(cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0))
  //pour la lecture de l'article localStorage (  localStorage.getItem()  )
  useEffect(() => {
    // sauvegarder le panier à chaque modification 
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} total={total} setTotal={setTotal} />
        <ShopingPlant cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default Products;