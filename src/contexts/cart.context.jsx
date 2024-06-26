import { createContext,useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";
const addCartItem=(cartItems,productToAdd)=>{
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===productToAdd.id);
    if(existingCartItem){
        return cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id
        ?{...cartItem,quantity:cartItem.quantity+1}
        :cartItem);
    }
return [...cartItems,{...productToAdd,quantity:1}];
}
const removeCartItem=(cartItems,CartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===CartItemToRemove.id);
        if(existingCartItem.quantity===1){
            return cartItems.filter(cartItem=>cartItem.id!==CartItemToRemove.id);
        }
        return cartItems.map((cartItem)=>
        cartItem.id===CartItemToRemove.id
        ?{...cartItem,quantity:cartItem.quantity-1}
        :cartItem);
}
const clearCartItem=(cartItems,CartItemToClear)=>{
    return cartItems.filter(cartItem=>cartItem.id!==CartItemToClear.id);
}
export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    cartTotal:0,
});
const CART_ACTION_TYPES={
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN',
}
export const INITIAL_STATE={
    isCartOpen:false,
    cartItems:[],
    cartCount:0,
   cartTotal:0,
}
export const CartReducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
         return{
            ...state,
            ...payload,
         }
         case CART_ACTION_TYPES.SET_IS_CART_OPEN:
         return{
            ...state,
            isCartOpen:payload,
         }
          
        default:
        throw new Error(`Unhandled type of ${type} in cartReducer`);
    }}


export const CartProvider=({children})=>{
    const [{cartItems,cartCount,cartTotal,isCartOpen},dispatch]=useReducer(CartReducer,INITIAL_STATE)
   /* const [isCartOpen,setIsCartOpen]=useState(false);

     const [cartItems,setCartItems]=useState([]);
    const[cartCount,setCartCount]=useState(0);
    const[cartTotal,setCartTotal]=useState(0);
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
        setCartCount(newCartCount);
    },[cartItems])
    useEffect(()=>{
        const newCartTotal=cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0);
        setCartTotal(newCartTotal);
    },[cartItems]);*/

const updateCartItemReducer=(newCartItems)=>{
    const newCartCount=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
    const newCartTotal=newCartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0);
    dispatch(
        createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems:newCartItems,
            cartTotal:newCartTotal,
            cartCount:newCartCount,}));
}

    const addItemToCart=(productToAdd)=>{
       const newCartItems=addCartItem(cartItems,productToAdd);
       updateCartItemReducer(newCartItems);
    }
    const removeItemFromCart=(CartItemToRemove)=>{
        const newCartItems=removeCartItem(cartItems,CartItemToRemove);
        updateCartItemReducer(newCartItems);
     }
     const clearItemFromCart=(CartItemToClear)=>{
        const newCartItems=clearCartItem(cartItems,CartItemToClear);
        updateCartItemReducer(newCartItems);
     }
     const setIsCartOpen=(bool)=>{
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));
     };
    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}