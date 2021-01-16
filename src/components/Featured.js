import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DripContext } from '../context/context';
import { CartContext } from '../context/cart';
import Loading from '../components/Loading';
import {GiCoffeeBeans} from 'react-icons/gi'

const Featured = ({...props}) => {

   const { loading, featured } = useContext(DripContext);
   const {addToCart} = useContext(CartContext);

   return (
      loading ? <Loading/> : (
      <FEATURED {...props}>
         {props.heading && <h3 className="featured-heading"><GiCoffeeBeans className="icon"/> {props.heading}</h3>}
         <div className="featured-products">
            {
               featured.map(itm => (
                  <div className="featured-item" key={itm.id}>
                     <h3>{itm.title}</h3>
                     <div className="imgbox">
                        <img src={itm.image} alt={itm.title}/>
                     </div>
                     <p>${itm.price}</p>
                     <div className="bttns">
                        <Link to={`/shop/${itm.id}`}>details</Link>
                        <button onClick={() => addToCart(itm)}>add to cart</button>
                     </div>
                  </div>
               ))
            }
         </div>
      </FEATURED>
      )
   )
}

export default Featured

const FEATURED = styled.div`
   background-color:var(--maroon);
   color:var(--offwhite);
   padding:3rem 0;
   .featured{
      &-products{
         max-width:1200px;margin:0 auto;
         display:grid;
         grid-template-columns:1fr 1fr 1fr;
         grid-gap:1rem;
         @media(max-width:1199px){margin-left:10px;margin-right:10px;}
      }
      &-item{
         /* border:5px solid var(--pri-blue); */
         /* background:silver; */
         h3{
            font-family: 'Dancing Script', cursive;
            font-size:1.75rem;
            margin-bottom:.5rem;
         }
         .imgbox{
            width:100%;
            height:225px;
            margin-bottom:.5rem;
            img{
               width:100%;
               height:100%;
               object-fit:cover;
            }
         }
         .bttns{
            display:flex;
            justify-content:space-between;
         }
      }
      &-heading{
         text-align:center;
         text-transform:uppercase;
         font-size:2rem;
         margin-bottom:2rem;
         .icon{font-size:2rem;line-height:2rem;}
      }
   }
`;