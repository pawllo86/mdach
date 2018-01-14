import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

class ProductList extends Component {
    
    constructor(props) {
        super(props);
    }
    
    groupProductsByProducer() {
        let result = new Map();
        
        _.map(this.props.products, product => {
            let products = result.get(product.producer);
            
            if (products) {
                products.push(product);
            } else {
                result.set(product.producer, [product]);
            }
        });
        return result;
    }
    
    renderSections(producerProducts) {
        let items = [];
        let config = {
            defaultExpanded: false
        }
        
        for (let producer of producerProducts.keys()) {
            items.push(this.renderProducerItem(producer, producerProducts.get(producer), config));
        }
        return items;
    }

    renderProducerItem(producer, products, config) {
        const selected = this.props.products[this.props.params.id];
        
        let expanded = null;
        if (selected) {
            expanded = producer === selected.producer ? 'in' : '';
        } else {
            expanded = !config.defaultExpanded ? 'in' : '';
            config.defaultExpanded = true;
        }
        
        return (
            <div key={producer} className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={'#' + producer}>{producer}</a>
                    </h4>
                </div>
                <div id={producer} className={`panel-collapse collapse ${expanded}`}>
                    <div className="panel-body">
                        { this.renderProductItems(products) }
                    </div>
                </div>
            </div>
        );
    }

    renderProductItems(products) {
        return products.map((product) => {
            return <h5 key={product.id} ><NavLink to={`/${this.props.module}/${product.id}`} activeClassName="selected">{product.name}</NavLink></h5>
        });
    }
        
    render() {
        const producerProducts = this.groupProductsByProducer();
        
        return (
            <div className="panel-group" id="accordion">
                { this.renderSections(producerProducts) }
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