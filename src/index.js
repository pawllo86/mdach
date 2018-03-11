import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/sections/main';
import Blachodachowka from './components/sections/blachodachowka';
import Trapezowa from './components/sections/trapezowa';
import Rabek from './components/sections/rabek';
import Panele from './components/sections/panele';
import Dachowka from './components/sections/dachowka';
import Okna from './components/sections/okna';
import Rynny from './components/sections/rynny';
import Akcesoria from './components/sections/akcesoria';
import Uslugi from './components/sections/uslugi';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="fill">
        <Header />
        <BrowserRouter>
            <div id="main" className="fill">
                <Navigation />
                <Switch>
                    <Route path="/blachodachowka/:id" component={Blachodachowka} />
                    <Route path="/blachodachowka" component={Blachodachowka} />
                    <Route path="/trapezowa/:id" component={Trapezowa} />
                    <Route path="/trapezowa" component={Trapezowa} />
                    <Route path="/rabek/:id" component={Rabek} />
                    <Route path="/rabek" component={Rabek} />
                    <Route path="/panele/:id" component={Panele} />
                    <Route path="/panele" component={Panele} />
                    <Route path="/dachowka" component={Dachowka} />
                    <Route path="/okna/:id" component={Okna} />
                    <Route path="/okna" component={Okna} />
                    <Route path="/rynny" component={Rynny} />
                    <Route path="/akcesoria" component={Akcesoria} />
                    <Route path="/uslugi" component={Uslugi} />
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('#content'));
