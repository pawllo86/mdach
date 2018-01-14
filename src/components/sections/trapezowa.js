import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TRAPEZOWA } from './sections';
import { fetchProducts } from '../../actions/index'
import ProductList from '../../containers/product-list';

class Trapezowa extends Component {
    
    componentWillMount() {
        this.props.fetchProducts(TRAPEZOWA);
    }
    
    render() {
        return (
            <div className='container products-main'>
                <nav className="col-sm-3 products-menu">
                    <ProductList module="trapezowa" params={this.props.match.params} />
                </nav>
                <div className="col-sm-9 products-content">
                    <h1>Trapezowa</h1>
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

export default connect(mapStateToProps, { fetchProducts })(Trapezowa);