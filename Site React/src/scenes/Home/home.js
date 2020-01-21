import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/header';
import DemoCarousel from './components/carousel';
import Footer from '../../components/footer';
import Menu from '../../components/menu';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="App">
                    <Header panier={this.props.panier} />
				    <Menu />
                </div>
                <div>
                    <DemoCarousel />  
                </div>
                <div>
                    <h2 className="Title">Article</h2>
                    <p className="test2">{this.props.products.map(produit => {
                        return (
                            <div className="Product">
                                <p className="Test">{produit.category}</p>
                                <p className="Test">{produit.product}</p>
                                <p className="Test">{produit.price} €</p>
                                <p className="Test">{produit.color}</p>
                                <p className="Test">{produit.size}</p>
                                <p className="Test">{produit.stockage}</p>
                                <p className="Test">{produit.type}</p>
                                <p className="Test">{produit.dpi?produit.dpi:null} </p>
                                <p className="Test">{produit.mark} </p>{produit.dpi?produit.dpi:null}
                                <button className="ProductButton" onClick={() => this.props.addBasket(produit)}>Ajouter au Panier</button>
                            </div>
                        )
                    })}</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;