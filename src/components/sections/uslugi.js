import React, { Component } from 'react';
import Card from '../card';

export default class Uslugi extends Component {
    
    render() {
        return (
            <div className='container products-main'>
                <div className="row">
                    <Card image="/img/products/service/wiezba.jpg" title="Konstrukcje dachowe" description="Kompleksowe konstrukcje dachowy, wieźba dachowa, foliowanie łacenie." />
                    <Card image="/img/products/service/krycie.jpg" title="Pokrycia dachowe" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                    <Card image="/img/products/service/altanka.jpg" title="Altanki" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                    <Card image="/img/products/service/zadaszenie.jpg" title="Zadaszenia" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                    <Card image="/img/products/service/okno.jpg" title="Montaż okien dachowych" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                    <Card image="/img/products/service/podbitka.jpg" title="Podbitki" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                    <Card image="/img/products/service/rynna.jpg" title="Montaż systemów rynnowych" description="Pokrycia z blachy dachówkowej, trapezowej oraz dachówki." />
                </div>
            </div>
        );
    }
}