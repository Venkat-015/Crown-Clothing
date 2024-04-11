import React,{ useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.components';
import Category from '../category/category.component';
import './shop.styles.scss';
import {fetchCategoriesStart} from '../../../utils/store/categories/category.action'
const Shop=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
         dispatch(fetchCategoriesStart());
        }
        ,[dispatch]);
    return(
        <Routes>
           <Route index element={<CategoriesPreview />}/>
           <Route path=':category' element={<Category />}/>
        </Routes>
    );
};
export default Shop;