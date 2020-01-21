import React, { Component } from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from '../../components/Header/header'
import Footer from '../../components/footer'

class ResultInscription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header panier={this.props.panier} />
                <div className="Login">
                    <p className="Login_2">Inscription</p>
                    <p>Vous incription a été un succès. Vous pouvez des à présent vous <Link to="/connexion">connecter!</Link></p>
                </div>
                <Footer />
            </div>
        );
    }
}


export default ResultInscription;