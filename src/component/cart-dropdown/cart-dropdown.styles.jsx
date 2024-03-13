import styled from 'styled-components';
import { BaseButton,GoogleSignInButton,InvertedButton}from '../button/button.styles.jsx'
export const CartDropDownContainer=styled.div `
position: absolute;
    width: 260px;
    height: 390px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1.5px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton}{
      margin-top: auto;
      border: 1px solid greenyellow;
      margin-bottom:6px; 
      text-align: center;
      align-content: center;
      margin-right: 0;
      padding: 2px;
    }
`;
export const EmptyMessage=styled.span `
font-size: 18px;
      margin: 50px auto;
      margin-bottom: 0px;`;
export const CartItems=styled.div`
height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      overflow-y: scroll; 
      overflow-x: hidden;`;