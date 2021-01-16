import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/cart';

// const Item = ({id, title, image:{url}, price}) => {
const Item = ({id, title, region, image, price}) => {
   const {addToCart} = useContext(CartContext);

   return (
      <ITEM>
         <h3>{title}</h3>
         <p className="region"><small>region:</small> {region}</p>
         <div className="imgbox">
            {/* <img src={url} alt={title}/> */}
            <img src={image} alt={title}/>
         </div>
         <div className="info">
            <p className="price">${price}</p>
            <div className="bttns">
               <button className="bttn bttn-orange" onClick={() => addToCart({id,title,region,image,price})}>add to cart</button>
               <Link className="bttn bttn-ghost" to={`/shop/${id}`}>details</Link>
            </div>
         </div>
      </ITEM>
   )
}

export default Item

const ITEM = styled.div`
padding:.5rem;
/* background:pink; */
h3{
   font-family: 'Dancing Script', cursive;
   font-size:1.6rem;line-height:1.2;
   color:var(--maroon);
}
.region{margin-bottom:.25rem;}
.imgbox{
   width:100%;
   height:300px;
   margin-bottom:.5rem;
   img{
      width:100%;height:100%;
      object-fit:cover;
      object-position:center;
   }
}
.bttn{
   color:var(--maroon);
   border:2px solid var(--maroon);
   font-size:14px;
   padding:3px 7px;
   &.bttn-orange{
      background-color:var(--orange);
      border:2px solid var(--orange);
      color:var(--offwhite);
      padding:3px 7px;
      margin-right:.5rem;
      cursor: pointer;
   }
}
.info{
   display:flex;justify-content:space-between;align-items:center;
}
`;