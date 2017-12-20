import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListSection from './product-list-section';

class ProductList extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            producerProducts: new Map()
        }
    }
    
    componentDidMount() {        
        this.setState((state, props) => {
            let result = new Map();
        
            this.props.products.forEach((product) => {
                let products = result.get(product.producer);

                if (products) {
                    products.push(product);
                } else {
                    result.set(product.producer, [product]);
                }
            });
            return {producerProducts: result};
        });
    }
    
    renderSections() {
        let items = [];
        
        for (let producer of this.state.producerProducts.keys()) {
            items.push(<ProductListSection key={producer} producer={producer} products={this.state.producerProducts.get(producer)} />);
        }
        return items;
    }
        
    render() {        
        return (
            <div className="panel-group" id="accordion">
                { this.renderSections() }
            </div>
        );
    }
}
            
function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList);