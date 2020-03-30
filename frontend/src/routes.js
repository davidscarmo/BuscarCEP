import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import Cep from './pages/cep'; 

export default function Routes()
{
    return(
        <BrowserRouter> 
            <Switch> 
                <Route path="/" exact component={Cep}></Route>
            </Switch>
        </BrowserRouter>
    ); 
}