import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Header extends Component {
    
    render() {
        return (
            <header className="products-header">
                <div className="container">
                    <a id="products-back" href="http://wybudowani24.pl/"><span className="glyphicon glyphicon-backward"/> Strona główna</a>
                    <img className="logo animated flipInY" src="/img/logo.png" alt="MDACH Logo" />
                
                    <h2>Oferta Handlowa</h2>
                    <h4>Zapraszamy do zapoznania się ze szczegółami oferty handlowej dla wybranych produktów.</h4>
                </div>
            </header>
        );
    }
}