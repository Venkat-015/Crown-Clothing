import {Fragment} from "react";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../../utils/store/categories/category.selector.js";
import Spinner from "../../spinner/spinner.component.jsx";
import CategoryPreview from '../../category-preview/category-preview.component.jsx';
const CategoriesPreview=()=>{
const categoriesMap=useSelector(selectCategoriesMap);
const isLoading=useSelector(selectCategoriesIsLoading);
    return(
        <Fragment>{isLoading ? (<Spinner />) :
          (Object.keys(categoriesMap).map(title=>{
            const products=categoriesMap[title];
            return (<CategoryPreview key={title} title={title} products={products} />)
          }))}

</Fragment>);
};
export default CategoriesPreview;