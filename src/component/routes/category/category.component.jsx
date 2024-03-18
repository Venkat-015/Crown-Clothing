import {useEffect,useState,Fragment} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../spinner/spinner.component';
import { selectCategoriesIsLoading,selectCategoriesMap} from '../../../utils/store/categories/category.selector';
import ProductCard from '../../product-card/product-card.component';
import './category.styles.scss';
const Category=()=>{
const {category}=useParams();
const categoriesMap=useSelector(selectCategoriesMap);
const isLoading=useSelector(selectCategoriesIsLoading);
const [products,setProducts]=useState(categoriesMap[category]);
useEffect(()=>{
    setProducts(categoriesMap[category]);
},[category,categoriesMap])
return(
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {isLoading ? 
        (<Spinner />
        ) : (
        <div className='category-container'>
      {
       products && products.map((product)=>(
       <ProductCard key={product.id} product={product} />))
        }</div>)}
   </Fragment>
)
}
export default Category;