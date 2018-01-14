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
import Dachowka from './components/sections/dachowka';
import Rynny from './components/sections/rynny';
import Akcesoria from './components/sections/akcesoria';
import Uslugi from './components/sections/uslugi';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <Header />
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/blachodachowka/:id" component={Blachodachowka} />
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
  </Provider>
  , document.querySelector('#content'));
