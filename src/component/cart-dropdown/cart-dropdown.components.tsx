import {useSelector}from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../utils/store/cart/cart.selector';
const CartDropdown=()=>{
    const cartItems=useSelector(selectCartItems);
    const navigate=useNavigate();
    const goToCheckOutHandler=useCallback(()=>{
        navigate('/checkout')
    },[]);
    return(
<CartDropDownContainer>
     <CartItems>
        {cartItems.length ?(
        cartItems.map((item)=><CartItem key={item.id}cartItem={item} />)):(<EmptyMessage>Your Cart is empty!</EmptyMessage>)}
     </CartItems>
    <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
</CartDropDownContainer>
    );
};
export default CartDropdown;