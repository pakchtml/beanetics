import React, {createContext, useState, useEffect} from 'react';
// import axios from 'axios';
import {featuredProds} from '../utils/helper';
import shopProds from './productData'

export const DripContext = createContext();

const DripProvider = ({children}) => {

   const [NavOpen, NavOpenSet] = useState(false);
   const [CartOpen, CartOpenSet] = useState(false);
   // const [Cart, CartSet] = useState([]);
   const [loading, loadingSet] = useState(false);
   const [products, productsSet] = useState([]);
   const [featured, featuredSet] = useState([]);

   useEffect(() => {
      loadingSet(true);
      // axios.get(`${url}/drip-products`).then(resp => {
      // axios.get(`${url}/products`).then(resp => {
      //    const featProds = featuredProds(resp.data);
      //    const prods = flattenProds(resp.data);
      //    // productsSet(resp.data);
      //    productsSet(prods);
      //    featuredSet(featProds);
      //    loadingSet(false);
      // })
      const featProds = featuredProds(shopProds);
      // const prods = flattenProds(shopProds);
      productsSet(shopProds);
      featuredSet(featProds);
      loadingSet(false);
      return () => {};
   }, []);

   return (
      <DripContext.Provider value={{
         NavOpen, NavOpenSet,
         CartOpen, CartOpenSet,
         loading,
         products,
         featured
      }}>
         {children}
      </DripContext.Provider>
   );
};

export default DripProvider;