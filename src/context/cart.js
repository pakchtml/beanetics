import React, {createContext, useState, useEffect} from 'react';
const getFromLS = () => {
   return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

export const CartContext = createContext();

const CartProvider = ({children}) => {

   const [cart, cartSet] = useState(getFromLS);
   const [cartItems, cartItemsSet] = useState(0);
   const [total, totalSet] = useState(0);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart)); // LS
      let nCartItems = cart.reduce((total, crtItm) => {
         return total += crtItm.amount;
      }, 0);// total is accumulator; crtItm is current
      cartItemsSet(nCartItems);

      let nTotal = cart.reduce((t, ci) => {
         return t += ci.amount * ci.price;
      }, 0);
      nTotal = parseFloat(nTotal.toFixed(2));
      totalSet(nTotal);
      
   }, [cart]);

   const rmItem = id => {
      cartSet([...cart].filter(itm => itm.id !== id));
   };
   const incAmt = id => {
      const nCart = [...cart].map(itm => {
         return itm.id === id ? {...itm, amount: itm.amount + 1} : {...itm};
      });
      cartSet(nCart);
   };
   const decAmt = (id, amt) => {
      if(amt === 1) {
         rmItem(id);
         return;
      } else {
         const nCart = [...cart].map(itm => {
            return itm.id === id ? {...itm, amount: itm.amount - 1} : {...itm};
         });
         cartSet(nCart);
      }
   };
   const addToCart = prod => {
      console.log(prod);
      // const {id, title, image:{url}, price} = prod;
      const {id, title, image, price} = prod;
      const item = [...cart].find(itm => itm.id === id);
      if(item){
         incAmt(id);
         return;
      } else {
         // const nItem = {id, title, image:url, price, amount: 1};
         const nItem = {id, title, image, price, amount: 1};
         const nCart = [...cart, nItem];
         cartSet(nCart);
      }
   };
   const clearCart = () => {cartSet([])};


   return (
      <CartContext.Provider value={{
         cart,cartItems,total,
         rmItem, incAmt, decAmt, addToCart, clearCart
      }}>
         {children}
      </CartContext.Provider>
   )
};

export default CartProvider;