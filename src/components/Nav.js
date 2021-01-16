import React, { useContext } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {DripContext} from '../context/context';
import {AiFillCloseCircle} from 'react-icons/ai'
import logo from '../images/logo.png'

const Nav = () => {

   const {NavOpen, NavOpenSet} = useContext(DripContext);

   return (
      <NAV show={NavOpen}>
         <AiFillCloseCircle className="close-icon"
            onClick={() => NavOpenSet(false)}
         />
         <img src={logo} alt="logo" className="logo"/>
         <div className="nav-link"><Link to="/" onClick={() => NavOpenSet(false)}>home</Link></div>
         <div className="nav-link"><Link to="/about" onClick={() => NavOpenSet(false)}>about</Link></div>
         <div className="nav-link"><Link to="/shop" onClick={() => NavOpenSet(false)}>shop</Link></div>
      </NAV>
   )
}

export default Nav

const NAV = styled.nav`
   z-index:1000;
   position:fixed;
   top:0;left:0;
   height:100%;width:600px;
   @media(max-width:600px){width:100%;}
   padding:.5rem;
   background:var(--offwhite);
   transition:.3s;
   transform: ${props => props.show ? `translateX(0)` : `translateX(-100%)`};
   .logo{
      display:block;
      height:130px;
      position: relative;
      transform:translateX(-50%);
      left:50%;
      margin-bottom:2rem;
   }
   .close-icon{
      font-size:1.5rem;
      color:#8b3131;
      position:absolute;
      top:5px;right:5px;
      cursor: pointer;
   }
   .nav-link{
      text-align:center;text-transform:uppercase;
      a{text-decoration:none;color:var(--maroon);font-size:1.8rem;line-height:1.6;}
   }
`;