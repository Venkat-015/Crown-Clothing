import { useSelector,useDispatch } from 'react-redux';
import './product-card.styles.scss';
import { selectCartItems } from '../../utils/store/cart/cart.selector.js';
import { addItemToCart } from '../../utils/store/cart/cart.action.js';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component.jsx';
const ProductCard=({product})=>{
    const {imageUrl,name,price}=product;
    const dispatch=useDispatch();
    const cartItems=useSelector(selectCartItems);
    const addProductToCart=()=>dispatch(addItemToCart(cartItems,product));
    return(
        <div className='product-card-container'>
         <img src={imageUrl} alt={`${name}`}/>
         <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
         </div>
         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}
export default ProductCard;