import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/Header/header'
import Footer from '../../components/footer'
import sha256 from 'sha256'

class Inscription extends React.Component {
    constructor() {
        super();
        this.state = {
        email: '',
        password: '',
        error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
        email: evt.target.value,
        });
    };

    async handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.email) {
        return this.setState({ error: 'Email is required' });
        }

        if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
        }

        let response = await fetch(
            "http://localhost:3001/users",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({email: this.state.email, password: sha256(this.state.password)})
             }
        );
        let json = await response.json();
        console.log(json);
        window.location.href = "/connexion";

        return this.setState({ error: '' });
    }

    handlePassChange(evt) {
        this.setState({
        password: evt.target.value,
        });
    }

    render() {
        return (
            <div>
                <Header panier={this.props.panier} />
                <div className="Login">
                    <p className="Login_2">Inscription</p>
                    <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <p data-test="error" onClick={this.dismissError}>
                            {this.state.error}
                        </p>
                    }
                        <label className="Login_3">Email</label>
                        <input type="email" data-test="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleUserChange} />
                        <label className="Login_3">Password</label>
                        <input type="password" data-test="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePassChange} />
                        <label className="Login_3"></label>
                        <input type="submit" value="Sign In" data-test="submit" />
                    </form>
                </div>
                <Footer />
            </div>
            
        );
    }
}

export default Inscription;