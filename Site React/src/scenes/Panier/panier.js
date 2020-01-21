import React, { Component } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from '../../components/Header/header'
import Menu from '../../components/menu'
import Footer from '../../components/footer'
import Suppr from '../Admin/components/img/suppr.jpg'

class Panier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: []
        }
    }

    async componentDidMount() {
        let response = await fetch(
            "http://localhost:3001/products",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    "Content-Type": "application/json"
                }
            }
        );
        let json = await response.json();
        this.setState({token: json})
    }

    async command() {
        let response = await fetch(
            "http://localhost:3001/orders",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({order: this.props.panier, user: this.state.token.email})
            }
        );
        let json = await response.json();
        console.log(json);
        window.location.href="/";
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Header panier={this.props.panier} />
				    <Menu />
                </div>
                <div>
                    <h2 className="Panier">Panier</h2>
                    <p>{this.props.panier.map(produit => {
                        return (
                            <div className="Admin" >
                                <div>
                                    <img src={Suppr} className="Suppr" onClick={this.removeBasket} />
                                </div>
                                <div className="ListProduct">
                                    <p className="Test">{produit.category}</p>
                                    <p className="Test">{produit.product}</p>
                                    <p className="Test">{produit.price} €</p>
                                    <p className="Test">{produit.color}</p>
                                    <p className="Test">{produit.size}</p>
                                    <p className="Test">{produit.stockage}</p>
                                    <p className="Test">{produit.type}</p>
                                    <p className="Test">{produit.dpi?produit.dpi:null} </p>
                                    <p className="Test">{produit.mark} </p>
                                </div>
                            </div>
                        )
                    })}</p>
                    <button className="ProductButton" onClick={() => this.command()}>Commander</button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Panier;