import React,{ useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.components';
import Category from '../category/category.component';
//import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.util';
import './shop.styles.scss';
import {fetchCategoriesAsync} from '../../../utils/store/categories/category.action'
const Shop=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        //const getCategoriesMap=async()=>{
            //const categoriesArray=await getCategoriesAndDocuments();
            //console.log(categoriesArray);
         dispatch(fetchCategoriesAsync());
        }
        //getCategoriesMap();
        ,[]);
    return(
        <Routes>
           <Route index element={<CategoriesPreview />}/>
           <Route path=':category' element={<Category />}/>
        </Routes>
    );
};
export default Shop;