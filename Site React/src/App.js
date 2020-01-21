import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Connexion from './scenes/Connexion/connexion';
import Inscription from './scenes/Inscription/inscription';
import Home from './scenes/Home/home';
import Promotion from './scenes/Promotions/promotions';
import Téléviseur from './scenes/Téléviseurs/téléviseur';
import Informatique from './scenes/Informatique/informatique';
import JeuxVidéos from './scenes/Jeux-Vidéos/jeuxVidéos';
import Téléphonie from './scenes/Téléphonie/téléphonie';
import Admin from './scenes/Admin/admin'
import Produit from './scenes/Produit/produit'
import Panier from './scenes/Panier/panier'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            panier: []
        }
    }

    addBasket = (produit) => {
        let Basket = this.state.panier;
        Basket.push(produit);
        this.setState({panier: Basket})
        localStorage.setItem("basket", Basket);
    }

    removeBasket = (produit) => {
        let Basket = this.state.panier;
        let position = Object.keys(Basket).find(key => Basket[key]._id === produit._id)
        if (position>-1) {
            Basket.splice(position,1);
            this.setState({panier:Basket})
        }
    }

    async componentDidMount() {
        let response = await fetch(
            "http://localhost:3001/products",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        );
        let json = await response.json();
        this.setState({products: json})
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={() => <Home products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/connexion' component={() => <Connexion products={this.state.products} panier={this.state.panier} />} />
                    <Route exact path='/inscription' component={() => <Inscription products={this.state.products} panier={this.state.panier} />} />
                    <Route exact path='/promotions' component={() => <Promotion products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/téléviseurs' component={() => <Téléviseur products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/informatique' component={() => <Informatique products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/jeux-vidéos' component={() => <JeuxVidéos products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/téléphonie' component={() => <Téléphonie products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/admin' component={() => <Admin products={this.state.products} panier={this.state.panier} />} />
                    <Route exact path='/produit' component={() => <Produit products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} />} />
                    <Route exact path='/panier' component={() => <Panier products={this.state.products} panier={this.state.panier} addBasket={this.addBasket} removeBasket={this.removeBasket} />} />
                </Switch>
            </Router>            
        );
    }
}


export default App;