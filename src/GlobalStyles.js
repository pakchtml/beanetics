// font-family: 'Courier Prime', monospace;
// font-family: 'Zilla Slab', serif;

import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *{margin:0; padding:0; box-sizing:border-box;}

   :root{
      --orange:rgb(206,149,70);
      --maroon:rgb(149,62,51);
      --offwhite:rgb(246,244,234);
      --offwhite-dark:rgb(226,224,214);
      --black:rgb(51,51,51);
      --grey:rgb(179,180,182);
      --yellow:rgb(248,213,113);
   }

   body{
      font-family: 'Lato', sans-serif;
      background-color:var(--offwhite);
      color:var(--black);
   }

   ul[class]{
      list-style:none;
      li{display:inline-block;}
   }

   .main-contain{
      max-width:1200px;
      margin:0 auto;
      @media(max-width:1199px){margin-left:10px;margin-right:10px;}
   }

   .bttn{
      display:inline-block;
      font-size:1rem;
      text-decoration:none;
      padding:.75rem 1rem;
      background-color:var(--maroon);
      color:var(--offwhite);
      margin-top:.5rem;
      &-ghost{
         background-color:transparent;
      }
   }
`;

export default GlobalStyles;

// font-family: 'Dancing Script', cursive;
// font-family: 'Lato', sans-serif;