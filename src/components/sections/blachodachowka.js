import React, { Component } from 'react';

import ProductList from '../../containers/product-list';
import ProductDetails from '../../containers/product-details';

export default class Blachodachowka extends Component {
    
    render() {
        return (
            <div className='container products-main'>
                <nav className="col-sm-3 products-menu">
                    <ProductList />
                </nav>
                <div className="col-sm-9 products-content">
                    <ProductDetails />
                </div>
            </div>
        );
    }
}