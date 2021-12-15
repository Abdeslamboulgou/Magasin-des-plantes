import React, { useState, useEffect } from 'react';
import './App.css';
import '../src/styles/layout.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  //pour la lecture de l'article localStorage (  localStorage.getItem()  )
  useEffect(() => {
    // sauvegarder le panier à chaque modification 
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    // pour ajouter un lien entre les components Cart et ShopingList
    // je passe cart et updateCart en props
    <div>

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
        </Switch>
        <Route path="/contact" exact component={Contact} />

      </Router>

    </div>

  );
}


export default App;
