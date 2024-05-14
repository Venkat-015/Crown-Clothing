import { CategoryItem } from "../categories/category.type";
import { CART_ACTION_TYPES,CartItem } from "./cart.type";
import { createAction,withMatcher,ActionWithPayload } from "../../reducer/reducer.utils";

export const addCartItem=(cartItems:CartItem[],productToAdd:CategoryItem):CartItem[]=>{
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
export const removeCartItem=(cartItems:CartItem[],CartItemToRemove:CartItem):CartItem[]=>{
    const existingCartItem=cartItems.find(
        (cartItem)=>cartItem.id===CartItemToRemove.id);
        if(existingCartItem && existingCartItem.quantity===1){
            return cartItems.filter(cartItem=>cartItem.id!==CartItemToRemove.id);
        }
        return cartItems.map((cartItem)=>
        cartItem.id===CartItemToRemove.id
        ?{...cartItem,quantity:cartItem.quantity-1}
        :cartItem);
}
export const clearCartItem=(cartItems:CartItem[],CartItemToClear:CartItem):CartItem[]=>{
    return cartItems.filter(cartItem=>cartItem.id!==CartItemToClear.id);
}
export type SetIsCartOpen=ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>;
export type SetCartItems=ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>;
export const setIsCartOpen=withMatcher((boolean:boolean):SetIsCartOpen=>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean));
export const setCartItems=withMatcher((cartItems:CartItem[]):SetCartItems=>
createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems));

export const addItemToCart=(cartItems:CartItem[],productToAdd:CategoryItem)=>{
    const newCartItems=addCartItem(cartItems,productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
 }
 export const removeItemFromCart=(cartItems:CartItem[],CartItemToRemove:CartItem)=>{
     const newCartItems=removeCartItem(cartItems,CartItemToRemove);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
  }
  export const clearItemFromCart=(cartItems:CartItem[],CartItemToClear:CartItem)=>{
     const newCartItems=clearCartItem(cartItems,CartItemToClear);
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);};