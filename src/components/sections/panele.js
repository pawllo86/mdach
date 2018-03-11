import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PANELE } from './sections';
import { fetchProducts } from '../../actions/index'
import ProductList from '../../containers/product-list';
import ProductDetails from '../../containers/product-details';

class Panele extends Component {
    
    componentWillMount() {
        this.props.fetchProducts(PANELE);
    }
    
    render() {
        return (
            <div className='container products-main'>
                <nav className="col-sm-3 products-menu">
                    <ProductList module="panele" params={this.props.match.params} />
                </nav>
                <div className="col-sm-9 products-content">
                    <ProductDetails params={this.props.match.params} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts })(Panele);