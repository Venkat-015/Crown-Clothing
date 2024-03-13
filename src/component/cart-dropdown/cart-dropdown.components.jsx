import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.components';
const CartDropdown=()=>{
    const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();
    const goToCheckOutHandler=()=>{
        navigate('/checkout')
    }    
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