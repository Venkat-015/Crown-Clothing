import { CATEGORIES_ACTION_TYPES } from "./category.type";
import { createAction } from "../../reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../firebase/firebase.util";
//export const setCategories=(categoriesArray)=>
//createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES,categoriesArray);
export const fetchCategoriesStart=()=>{
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}
export const fetchCategoriesSuccess=(categoriesArray)=>{
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);
}
export const fetchCategoriesFailed=(error)=>{
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,error);
}
export const fetchCategoriesAsync=()=>{
    return async dispatch=>{dispatch(fetchCategoriesStart());
    try{
        const categoriesArray=await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }
    catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
};};