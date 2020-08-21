import React from 'react';
import {Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './shared/components/Navbar/Navbar'
import HomePage from './views/HomePage/HomePage';
import SalesPage from './views/SalesPage/SalesPage';
import StorePage from './views/StorePage/StorePage';
import LoginPage from './views/LoginPage/LoginPage';
import CartPage from './views/CartPage/CartPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/StorePage" component={StorePage} />
        <Route path="/SalesPage" component={SalesPage} />
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/CartPage" component={CartPage} />
      </Router>
    </div>
  );
}

export default App;
