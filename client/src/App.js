import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'


import FooterNav from './components/layouts/FooterNav';

import Home from './components/home/Home'







function App() {
  return (
    <BrowserRouter>







      <div className="App">
        <div id="myWrapper">

          <Switch>
            <Route path="/">
              <Home/>
            </Route>





          </Switch>





        </div>

        <div id="myFooter">
          <FooterNav/>

        </div>


      </div>
      <ReactQueryDevtools initialIsOpen={ false} />







    </BrowserRouter>
  );
}

export default App;
