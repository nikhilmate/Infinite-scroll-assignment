import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard';
import Onboarding from '../components/pages/Onboarding';

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" component={Onboarding} exact={true} />
            <Route path="/home" component={Dashboard} exact={true} />
        </Switch>
    );
}

export default AppRouter