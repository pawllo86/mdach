import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Navigation from './navigation';
import Main from './sections/main';
import Blachodachowka from './sections/blachodachowka';
import Trapezowa from './sections/trapezowa';
import Dachowka from './sections/dachowka';
import Rynny from './sections/rynny';
import Akcesoria from './sections/akcesoria';
import Uslugi from './sections/uslugi';

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/blachodachowka" component={Blachodachowka} />
                        <Route path="/trapezowa" component={Trapezowa} />
                        <Route path="/dachowka" component={Dachowka} />
                        <Route path="/rynny" component={Rynny} />
                        <Route path="/akcesoria" component={Akcesoria} />
                        <Route path="/uslugi" component={Uslugi} />
                        <Route path="/" component={Main} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}
