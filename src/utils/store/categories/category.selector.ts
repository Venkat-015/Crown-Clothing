import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.type';
import { RootState } from '../store';
const selectCategoryReducer=(state: RootState):CategoriesState=>state.categories;
export const selectCategories=createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>categoriesSlice.categories);
export const selectCategoriesMap=createSelector(
  [selectCategories],
  (categories):CategoryMap=>
 categories.reduce((acc,category)=>{
    const {title,items}=category;
    acc[title.toLowerCase()]=items;
    return acc;
  },{}as CategoryMap));

export const selectCategoriesIsLoading=
createSelector(
  [selectCategoryReducer],(categoriesSlice)=>categoriesSlice.isLoading);

/*export const selectCategories = (state) => state.categories.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);*/
