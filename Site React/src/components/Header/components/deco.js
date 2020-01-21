import React, { Component } from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Panier from './img/panier.jpg'

class Deco extends React.Component {
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
                
                <div className="Coin-link">
                    <input type="button" value="Deconexion" data-test="submit" onClick={()=>this.Deconnexion()} />
                </div>
            </div>
            
        );
    }
}

export default Deco;