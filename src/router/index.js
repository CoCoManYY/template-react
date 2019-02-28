import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import App from '../container/app';
import Docs from '../container/docs';

const Router = ({component: Component, children, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            <Component {...props} ><Switch>{children}</Switch></Component>
        )}
    />
);

const Root = () => (
    <BrowserRouter>
        <div className="router-content">
            <Switch>
                {/*加上`exact`排他性*/}
                <Router exact path="/" component={App} />
                <Router exact path="/docs" component={Docs} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default hot(module)(Root);