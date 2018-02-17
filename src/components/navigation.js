import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMenuItem } from '../actions/index';


export default class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="300">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><NavLink to="/blachodachowka" activeClassName="selected">Blachodachówka</NavLink></li>
                        <li><NavLink to="/trapezowa" activeClassName="selected">Blacha trapezowa</NavLink></li>
                        <li><NavLink to="/rabek" activeClassName="selected">Blacha na rąbek</NavLink></li>
                        <li><NavLink to="/dachowka" activeClassName="selected">Dachówka</NavLink></li>
                        <li><NavLink to="/rynny" activeClassName="selected">Rynny</NavLink></li>
                        <li><NavLink to="/akcesoria" activeClassName="selected">Akcesoria</NavLink></li>
                        <li><NavLink to="/uslugi" activeClassName="selected">Usługi</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}