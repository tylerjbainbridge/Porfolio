import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { ProfileRouter } from './components/ProfileRouter';
require('../style/base.scss');

const render = () => {
    ReactDOM.render(
        ProfileRouter,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    module.hot.accept('./components/ProfileRouter', render);
}