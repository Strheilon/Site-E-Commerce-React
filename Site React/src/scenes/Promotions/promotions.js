import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/menu';
import Header from '../../components/Header/header'

class Promotion extends React.Component {
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
                <h2>Holla</h2>
            </div>
            
        );
    }
}

export default Promotion;