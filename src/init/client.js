import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import store, { history } from './store';
import Routes from '../routes';

require('offline-plugin/runtime').install();

const Root = () =>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {Routes}
        </ConnectedRouter>
    </Provider>;

// render the main component
render(<Root/>, document.getElementById('app')
);
if (module.hot) {
    module.hot.accept(<Root />, document.getElementById('app'));
}
