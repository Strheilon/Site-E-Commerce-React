import React, { Component } from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Panier from './img/panier.jpg'

class Coin extends React.Component {
    constructor(props) {
        super(props);
    }

    async Deconnexion() {
        localStorage.getItem('token');
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div className="Coin">
                <div className="LogoPanier">
                    {this.props.panier.length}
                    <Link to="/panier"><img src={Panier} /></Link>
                </div>
                <div className="Coin-link">
                    <Link to="/connexion">Connexion</Link>
                    <Link to="/inscription">Inscription</Link>
                    </div>
            </div>
            
        );
    }
}

export default Coin;