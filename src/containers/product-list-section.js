import React, { Component } from 'react';
import { selectProduct } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductListSection extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            producer: props.producer,
            products: props.products
        }
    }
    
    renderProducts() {
        return this.state.products.map((product) => {
            return <h5 key={product.name} onClick={() => this.props.selectProduct(product)} >{product.name}</h5>
        });
    }
    
    render() {
        const expanded = this.state.producer === 'Blachotrapez' ? 'in' : '';
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href={'#' + this.state.producer}>{this.state.producer}</a>
                    </h4>
                </div>
                <div id={this.state.producer} className={`panel-collapse collapse ${expanded}`}>
                    <div className="panel-body">
                        { this.renderProducts() }
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectProduct}, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductListSection);