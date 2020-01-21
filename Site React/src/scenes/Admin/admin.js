import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/header'
import Add from './components/img/add.jpg';
import Form from './components/form'
import Suppr from './components/img/suppr.jpg'
import Menu from '../../components/menu'

function Adding (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

function AddPromotion (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

function AddJeuxVideos (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

function AddTeleviseur (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

function AddInformatique (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

function AddTelephonie (props) {
    if (!props.add) {
      return null;
    }
  
    return (
        <div className="form">
            <Form />
        </div>
    );
}

class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          addProduct: false,
          order: []
        }
      this.handleAddClick = this.handleAddClick.bind(this);
      this.jeuxVideosClick = this.jeuxVideosClick.bind(this);
      this.informatiqueClick = this.informatiqueClick.bind(this);
      this.telephonieClick = this.telephonieClick.bind(this);
      this.televiseurClick = this.televiseurClick.bind(this);
      this.promotionClick = this.promotionClick.bind(this);
    }
  
    handleAddClick() {
      this.setState(prevState => ({
        addProduct: !prevState.addProduct
      }));
    }

    jeuxVideosClick() {
        this.setState(prevState => ({
          addJeuxVideos: !prevState.addJeuxVideos,
          addPromotion: false, 
          addTeleviseur: false, 
          addInformatique: false, 
          addTelephonie: false, 
        }));
    }

    informatiqueClick() {
        this.setState(prevState => ({
            addInformatique: !prevState.addInformatique,
            addPromotion: false, 
            addJeuxVideos: false, 
            addTeleviseur: false, 
            addTelephonie: false, 
        }));
    }

    telephonieClick() {
        this.setState(prevState => ({
          addTelephonie: !prevState.addTelephonie,
          addPromotion: false, 
          addJeuxVideos: false, 
          addTeleviseur: false, 
          addInformatique: false, 
        }));
    }

    televiseurClick() {
        this.setState(prevState => ({
          addTeleviseur: !prevState.addTeleviseur,
          addPromotion: false, 
          addJeuxVideos: false, 
          addInformatique: false, 
          addTelephonie: false, 
        }));
    }

    promotionClick() {
        this.setState(prevState => ({
          addPromotion: !prevState.addPromotion,
          addJeuxVideos: false, 
          addTeleviseur: false, 
          addInformatique: false, 
          addTelephonie: false, 
        }));
    }
    
    async componentDidMount() {
        let response = await fetch(
            "http://localhost:3001/orders",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        );
        let json = await response.json();
        this.setState({order: json})
    }

    async DeleteProduct(produitId) {
        let response = await fetch(
            "http://localhost:3001/products/" + produitId,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        );
        let json = await response.json();
        console.log(json);
        window.location.reload()
    }
    
    render() {
      return (
        <div>
            <div>
                <div className="App">
                    <Header panier={this.props.panier} />
                    <Menu />
                </div>
                <div>
                    <div>
                        <img src={Add} className="Add" onClick={this.handleAddClick} />
                    </div>
                    <Adding add={this.state.addProduct} />
                </div>
                <div>
                    <h2 className="Produit">Produit</h2>
                    <p>{this.props.products.map(produit => {
                        return (
                            <div className="Admin" >
                                <div>
                                    <img src={Suppr} className="Suppr" onClick={()=>this.DeleteProduct(produit._id)} />
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
                </div>
                <div>
                    <h2 className="Commande">Commande</h2>
                    <p>{this.state.order.map(order => {
                        return (
                            <div className="Admin" >
                                <div className="ListProduct">
                                    <p className="Test">{order.order}</p>
                                    <p className="Test">{order.user}</p>
                                </div>
                            </div>
                        )
                    })}</p>
                </div>
            </div>
        </div>
      );
    }
}


export default Admin;