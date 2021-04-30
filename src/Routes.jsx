import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    
                </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default Routes;