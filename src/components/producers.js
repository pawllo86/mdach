import React, { Component } from 'react';

export default class Producers extends Component {
    
    render() {
        return (
            <div className='row'>
                <div className="col-md-6 producer-item">
                    <img src="/img/ruukki.jpg" alt="Ruukki producent blachodachówki"/>
                </div>
                <div className="col-md-6 producer-item">
                    <img src="/img/budmat.png" alt="Bud-Mat producent blachodachówki"/>
                </div>
                <div className="col-md-6 producer-item">
                    <img src="/img/plannja2.jpg" alt="Plannja producent blachodachówki"/>
                </div>
                <div className="col-md-6 producer-item">
                    <img src="/img/blachotrapez3.png" alt="Blachotrapez producent blachodachówki"/>
                </div>
                <div className="col-md-12 producer-item">
                    <img src="/img/novatik2.jpg" alt="Novatic producent blachodachówki"/>
                </div>
            </div>
        );
    }
}