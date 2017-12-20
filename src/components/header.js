import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    
    render() {
        return (
            <header className="products-header">
                <div className="container">
                    <a id="products-back" href="../index.html">
                        <i className="fa fa-reply fa-2x" aria-hidden="true"></i>
                    </a>
                    <img className="logo animated flipInY" src="../img/logo.png" alt="MDACH Logo" />
                
                    <h2>{this.props.header.title}</h2>
                    <h4>{this.props.header.subtitle}</h4>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        header: state.context.header
    }
}

export default connect(mapStateToProps)(Header);