import React, { Component } from 'react';
import Card from '../card';

export default class Akcesoria extends Component {
    
    render() {
        return (
            <div className='container products-main'>
                <div className="row">
                    <Card image="/img/products/accesories/tasma.jpg" title="Taśmy dachowe" description="Taśmy kalenicowe, taśmy kominowe, taśmy bitumiczne, taśmy rozprężane, taśmy naprawcze." />
                    <Card image="/img/products/accesories/komunikacja.jpg" title="Komunikacja dachowa" description="Ławy kominiarskie, mocowniki ławy, wsporniki mocowania." />
                    <Card image="/img/products/accesories/uszczelka.jpg" title="Uszczelki uniwersalne" description="Uszczelki klinowe, uszczelki prostokątne, uszczelki profilowane." />
                    <Card image="/img/products/accesories/okap.jpg" title="Akcesoria okapu" description="Pasy nadrynnowe, grzebienie okapowe, kratka okapowa, arkusze blachy płaskiej." />
                    <Card image="/img/products/accesories/kosz.jpg" title="Kosze dachowe" description="Kosze dachowe podłużne, kosze dachowe poprzeczne, kosze dachowe rolowane." />
                    <Card image="/img/products/accesories/wentylacja.jpg" title="Wentylacja dachowa" description="Kominki dachowe, wywietrzniki dachowe, przejścia do solarów, przejścia antenowe." />
                    <Card image="/img/products/accesories/snieg.jpg" title="Akcesoria przeciwśniegowe" description="Płotki przeciwśniegowe, wsporniki płotka, łączniki płotka, rury przeciwśniegowe" />
                    <Card image="/img/products/accesories/wkret.jpg" title="Wkręty samogwintujące" description="Wkręty samogwintujące do mocowania blachodachówek, blach trapezowych." />
                    <Card image="/img/products/accesories/ptactwo.jpg" title="Zabezpieczenia na ptactwo" description="Kolce zabezpieczające uniemożliwiające ptactwu lądowanie na elementach dachu." />
                </div>
            </div>
        );
    }
}