import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { HiMenu } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';
import { DripContext } from '../context/context';
import { CartContext } from '../context/cart';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
import { MdStore } from 'react-icons/md'

const Navbar = () => {

   const { NavOpen, NavOpenSet, CartOpen, CartOpenSet } = useContext(DripContext);
   const { cartItems } = useContext(CartContext);

   const navOpenSet = () => {
      NavOpenSet(!NavOpen);
      CartOpenSet(false);
   };
   const cartOpenSet = () => {
      NavOpenSet(false);
      CartOpenSet(!CartOpen);
   };

   return (
      <NAVBAR>
         <main>
            <HiMenu className="nav-icons-icon" style={{ marginRight: '1rem' }}
               onClick={navOpenSet}
            />
            <div className="logo">
               <Link to="/" style={{ textDecoration: 'none', color: 'var(--pri-blue)' }}>
                  <img src={logo} alt="logo" />
                  {/* <h2>the evolution of better coffee</h2> */}
               </Link>
               <h2>the evolution of better coffee</h2>
            </div>
            {/* <div className="nav-links">
               <ul className="links">
                  <li>Visit our <Link to="/shop">shop</Link>.</li>
                  <li>Upcoming <Link to="/shop">events</Link>.</li>

               </ul>
            </div> */}
            <div className="nav-icons">
               {/* <HiMenu className="nav-icons-icon" style={{marginRight:'1rem'}}
                  onClick={navOpenSet}
               /> */}
               <div className="cart-div">
                  <FaShoppingCart className="nav-icons-icon"
                     onClick={cartOpenSet}
                  />
                  <p className={`cart-div-text ${cartItems === 0 ? `` : `show`}`}>{cartItems}</p>
               </div>
            </div>
         </main>
         <div className="contact">
            <p><MdStore className="icon-contacts" /> 7028 Columbia Pike Annandale, VA 22003 <span>|</span> <AiFillPhone className="icon-contacts" /> 703-941-4506 <span>|</span> <HiOutlineMail className="icon-contacts" /> info@beanetics.com</p>
         </div>
      </NAVBAR>
   )
}

export default Navbar

const NAVBAR = styled.nav`
   position:sticky;
   top:0;left:0;
   main{
      display:flex;justify-content:space-between;
      padding:10px;
      .logo{
         display:flex;
         img{height:120px;}
         h2{
            font-family: 'Dancing Script', cursive;
            font-size:2rem;
            font-weight:700;
            text-transform:capitalize;
            color:var(--maroon);
            align-self:center;
            margin-left:1rem;
            @media(max-width:665px){display:none;}
         }
      }
      .nav-icons{
         &-icon{
            font-size:1.75rem;
            cursor: pointer;
         }
         .cart-div{
            position: relative;
            display:inline-block;
            &-text{
               color:white;
               position:absolute;
               top:0;right:0;
               font-size:12px;line-height:12px;
               background:red;
               width:12px;height:12px;
               border-radius:50%;
               text-align:center;
               display:none;
               &.show{display:block;}
            }
         }
      }
      .nav-links{
         li{color:rgb(120,120,120);}
         a,a:visited{
            /* font-size:1.35rem; */
            font-weight:bold;
            text-decoration:none;
            color:var(--pri-blue);
         }
      }
   }
   .contact{
      padding:5px 10px;
      background-color:var(--orange);
      color:var(--offwhite);
      p{
         font-size:14px;
         line-height:14px;
         display:flex;
         span{margin:0 .5rem;}
         .icon-contacts{align-self:center;margin-right:.25rem;}
         @media(max-width:601px){font-size:12px;}
      }
      @media(max-width:530px){display:none;}
   }
`;