import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Menu">
                <Link to="/">Accueil</Link>
                <Link to="/promotions">Promotions</Link>
                <Link to="/téléviseurs">Téléviseur</Link>
                <Link to="/informatique">Informatique</Link>
                <Link to="/jeux-vidéos">Jeux Vidéos</Link>
                <Link to="/téléphonie">Téléphonie</Link>
            </div>
        );
    }
}


export default Menu;