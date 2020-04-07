import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/useAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/product/:productKey">   {/* dynamic path */}
              <ProductDetail />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
