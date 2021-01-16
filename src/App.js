import React from 'react';
import styled from 'styled-components';
import GS from './GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Cart from './components/Cart'
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Default from './pages/Default';
import DripProvider from './context/context';
import CartProvider from './context/cart';

const App = () => {
   return (
      <DripProvider>
         <CartProvider>
            <APP id="App">
               <Navbar/>
               <Switch>
                  <Route exact path="/">
                     <Home/>
                  </Route>
                  <Route exact path="/shop">
                     <Shop/>
                  </Route>
                  <Route exact path="/about">
                     <About/>
                  </Route>
                  <Route exact path="/shop/:id">
                     <Product/>
                  </Route>
                  <Route exact path="*">
                     <Default/>
                  </Route>
               </Switch>
               <Footer/>
               <Nav/>
               <Cart/>
               <GS/>
            </APP>
         </CartProvider>
      </DripProvider>
   );
};

export default App;

const APP = styled.div`
position:relative;
width:100%;
overflow:hidden;
`;