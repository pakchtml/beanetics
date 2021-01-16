import React, {useContext} from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillTrash2Fill } from 'react-icons/bs';
import {CartContext} from '../context/cart';

const CartItem = ({id, image, title, price, amount}) => {
   const {rmItem, incAmt, decAmt} = useContext(CartContext);
   return (
      <CARTITEM>
         <div className="imgbox">
            <img src={image} alt={title} />
         </div>
         <h3 className="title">{title}</h3>
         <p className="price">${price}</p>
         <div className="ctrl">
            <AiOutlinePlus className="icon inc" onClick={() => incAmt(id)}/>
            <span className="quantity">{amount}</span>
            <AiOutlineMinus className="icon dec" onClick={() => decAmt(id, amount)}/>
         </div>
         <BsFillTrash2Fill className="trash" onClick={() => rmItem(id)}/>
      </CARTITEM>
   )
}

export default CartItem

const CARTITEM = styled.div`
   /* display:flex; */
   display:grid;
   grid-template-columns:1fr 3fr 1fr 2fr 1fr;
   .title{
      align-self:center;margin-left:.5rem;
      @media(max-width:500px){font-size:1rem;}
   }
   .trash{
      align-self:center;margin-left:auto;
      font-size:1.3rem;
      transform:translateX(-10px);
      cursor:pointer;
      &:hover{color:var(--maroon);}
   }
   .price,.ctrl{
      display:flex;
      justify-content:center; align-items:center;
   }
   .price{
      @media(max-width:500px){font-size:.8rem;}
   }
   .ctrl{
      @media(max-width:500px){font-size:.8rem;}
      .icon{cursor:pointer;}
   }
   &:nth-child(even){background-color:var(--offwhite-dark);}
`;
