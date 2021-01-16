import React, {useContext} from 'react';
import styled from 'styled-components';
import {DripContext} from '../context/context';
import {AiFillCloseCircle} from 'react-icons/ai';
import {CartContext} from '../context/cart';
import {Link} from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

   const {CartOpen, CartOpenSet} = useContext(DripContext);
   const {cart, total, clearCart} = useContext(CartContext);

      return (
         <CART show={CartOpen}>
            <AiFillCloseCircle className="close-icon"
               onClick={() => CartOpenSet(false)}
            />
            {
               cart.length === 0 ?
               (<div className="empty">
                  <p>Your cart is empty.</p>
                  <img src="https://www.beanetics.com/wp-content/uploads/2013/08/about-us-home-image.jpg" alt="empty"/>
                  <p>Please take a look at our <Link to="/shop" onClick={() => CartOpenSet(false)}>shop</Link>.</p>
               </div>) :
               (<div className="cart-items">
                  <h4>Items in Cart</h4>
                  {cart.map(itm => <CartItem key={itm.id} {...itm}/>)}
                  <p className="total">Total: ${total}</p>
                  <div className="clear-cart" onClick={() => clearCart()}>
                     <button className="bttn">Clear Cart</button>
                  </div>
               </div>)
            }
         </CART>
      )
   // }

}

export default Cart

const CART = styled.div`
   z-index:1001;
   position:fixed;
   top:0;right:0;
   height:100%;width:500px;
   @media(max-width:600px){width:100%;}
   padding:10px;
   background:var(--offwhite);
   transition:.3s;
   transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
   .close-icon{
      position:absolute;
      top:5px;right:5px;
      font-size:1.5rem;
      color:var(--maroon);
      cursor: pointer;
   }
   .cart-items{
      .imgbox{
         width:75px;height:75px;
         img{
            width:100%;height:100%;
            object-fit:contain;
         }
      }
      h3{font-weight:400;}
      h4{
         font-size:1.5rem;
         margin-bottom:1rem;
      }
      .total{margin-top:3rem;text-align:right;}
      .clear-cart{
         text-align:right;
         /* display:inline-block; */
         /* color:var(--maroon); */
         margin-top:2rem;
         position:relative;right:0;
         /* border:2px solid var(--maroon); */
         button{border:none;cursor:pointer;}
      }
   }
   .empty{
      p{font-size:1.5rem;}
      img{display:block;margin:1rem 0;width:100%;}
   }
`;