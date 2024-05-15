import {useEffect,useState,Fragment} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../spinner/spinner.component';
import { selectCategoriesIsLoading,selectCategoriesMap} from '../../../utils/store/categories/category.selector';
import ProductCard from '../../product-card/product-card.component';
import { CategoryContainer,Title } from './category.styles';
type CategoryRouteParams={
    category:string;
};
const Category=()=>{
const {category}=useParams<keyof CategoryRouteParams>()as CategoryRouteParams;
const categoriesMap=useSelector(selectCategoriesMap);
const isLoading=useSelector(selectCategoriesIsLoading);
const [products,setProducts]=useState(categoriesMap[category]);
useEffect(()=>{
    setProducts(categoriesMap[category]);
},[category,categoriesMap]);
return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
