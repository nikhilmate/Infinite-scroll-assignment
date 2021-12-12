import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard';
import Onboarding from '../components/pages/Onboarding';
import { R_PREFIX } from '../utils/dom.utils';

const AppRouter = () => {
    return (
        <Switch>
            <Route path={`/${R_PREFIX}/`} component={Onboarding} exact={true} />
            <Route path={`/${R_PREFIX}/home`} component={Dashboard} exact={true} />
            <Route render={() => <div style={{textAlign: 'center', fontSize: '24px'}}>Not Found</div>} />
        </Switch>
    );
}

export default AppRouter