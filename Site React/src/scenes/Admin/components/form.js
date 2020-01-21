import React, { Component } from 'react';
import '../../../App.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      product: '',
      price: '',
      category: '',
      color: '',
      size: '',
      stockage: '',
      type: '',
      dpi: '',
      mark: '',
      error: '',
      };

      this.handleProductChange = this.handleProductChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleColorChange = this.handleColorChange.bind(this);
      this.handleSizeChange = this.handleSizeChange.bind(this);
      this.handleStockageChange = this.handleStockageChange.bind(this);
      this.handleTypeChange = this.handleTypeChange.bind(this);
      this.handleDpiChange = this.handleDpiChange.bind(this);
      this.handleMarkChange = this.handleMarkChange.bind(this);
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleProductChange(evt) {
        this.setState({
        product: evt.target.value,
        });
    };

    handlePriceChange(evt) {
        this.setState({
        price: evt.target.value,
        });
    };

    handleCategoryChange(evt) {
        this.setState({
        category: evt.target.value,
        });
    };

    handleColorChange(evt) {
        this.setState({
        color: evt.target.value,
        });
    };

    handleSizeChange(evt) {
        this.setState({
        size: evt.target.value,
        });
    };

    handleStockageChange(evt) {
        this.setState({
        stockage: evt.target.value,
        });
    };

    handleTypeChange(evt) {
        this.setState({
        type: evt.target.value,
        });
    };

    handleDpiChange(evt) {
        this.setState({
        dpi: evt.target.value,
        });
    };    
    
    handleMarkChange(evt) {
        this.setState({
        mark: evt.target.value,
        });
    };
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }

    async AddProduct() {
        let response = await fetch(
            "http://localhost:3001/products",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({category:this.state.category, product: this.state.product, price:this.state.price, color:this.state.color, size:this.state.size, stockage:this.state.stockage, type:this.state.type, dpi:this.state.dpi, mark:this.state.mark})
            }
        );
        let json = await response.json();
        console.log(json);
        window.location.reload()
    }
    
    render() {
      return (
        <div>
            <input type="string" data-test="category" required="true" placeholder="Catégorie" value={this.state.category} onChange={this.handleCategoryChange} />
            <input type="string" data-test="product" required="true" placeholder="Nom du Produit" value={this.state.product} onChange={this.handleProductChange} />
            <input type="number" data-test="price" required="true" placeholder="Prix" value={this.state.price} onChange={this.handlePriceChange} />
            <input type="string" data-test="color" placeholder="Couleur" value={this.state.color} onChange={this.handleColorChange} />
            <input type="number" data-test="size" placeholder="Taille (Pouce)" value={this.state.size} onChange={this.handleSizeChange} />                
            <input type="string" data-test="stockage" placeholder="Stockage" value={this.state.stockage} onChange={this.handleStockageChange} />
            <input type="string" data-test="type" placeholder="Type" value={this.state.type} onChange={this.handleTypeChange} />
            <input type="number" data-test="dpi" placeholder="DPI" value={this.state.dpi} onChange={this.handleDpiChange} />
            <input type="string" data-test="mark" placeholder="Marque/Console" value={this.state.mark} onChange={this.handleMarkChange} />
            <input type="button" value="Ajouter" data-test="submit" onClick={()=>this.AddProduct()} />
        </div>
      );
    }
}

export default Form;