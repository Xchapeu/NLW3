import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import RegisterSucceded from './pages/RegisterSucceded';
import LoginPage from './pages/LoginPage';
import ForgottenPassword from './pages/ForgottenPassword';
import RecoveryPassword from './pages/RecoveryPassword';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>{/* Só permite uma rota por vez */}
                <Route path='/' exact component={Landing} />
                <Route path='/login' component={LoginPage} />
                <Route path='/forgotten-password' component={ForgottenPassword} />
                <Route path='/recovery-password' component={RecoveryPassword} />
                <Route path='/app' component={OrphanagesMap} />
                <Route path='/orphanages/create' component={CreateOrphanage} />
                <Route path='/orphanages/register-succeded' component={RegisterSucceded} />
                <Route path='/orphanages/:id' component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;