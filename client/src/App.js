import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query-devtools'


import FooterNav from './components/layouts/FooterNav';

import Navbar from './components/layouts/Navbar'

import Home from './components/home/Home'
import User from './components/user/User'
import Bookmarks from './components/bookmarks/Bookmarks'








function App() {
  return (
    <BrowserRouter>







      <div className="App">
        <Navbar/>
        <div id="myWrapper">



          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/user">
              <User/>
            </Route>

            <Route path="/bookmarks">
              <Bookmarks/>
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
