import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMenuItem } from '../actions/index';


class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="300">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li onClick={() => this.props.selectMenuItem('BLACHODACHOWKA')}><Link to="/blachodachowka">Blachodachówka</Link></li>
                        <li onClick={() => this.props.selectMenuItem('TRAPEZOWA')}><Link to="/trapezowa">Blacha trapezowa</Link></li>
                        <li onClick={() => this.props.selectMenuItem('DACHOWKA')}><Link to="/dachowka">Dachówka</Link></li>
                        <li onClick={() => this.props.selectMenuItem('RYNNY')}><Link to="/rynny">Rynny</Link></li>
                        <li onClick={() => this.props.selectMenuItem('AKCESORIA')}><Link to="/akcesoria">Akcesoria</Link></li>
                        <li onClick={() => this.props.selectMenuItem('USLUGI')}><Link to="/uslugi">Usługi</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMenuItem}, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);