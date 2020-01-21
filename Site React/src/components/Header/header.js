import React, { Component } from 'react';
import logo from './img/e-commerce.jpg'
import '../../App.css';
import Coin from './components/co-in'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {    
        return (
          	<div className="App">
				<div>
					<Coin panier={this.props.panier} />
				</div>
				<div className="App-logo">
					<img scr={logo}></img>
				</div>
          	</div>
        )
    }
}

export default Header;