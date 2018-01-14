import React, { Component } from 'react';

export default class Card extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.image} />
                    <hr />
                    <div className="caption">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <p className="buttons"><a href="#" className="btn btn-primary" role="button">Szczegóły</a></p>
                    </div>
                </div>
            </div>
        );
    }
}