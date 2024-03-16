/*export const selectCategoriesMap=(state)=>
 {console.log('selector fired');
    return state.categories.categories
.reduce((acc,category)=>{
    const {title,items}=category;
    acc[title.toLowerCase()]=items;
    return acc;
  },{})};*/
  
  import { createSelector } from 'reselect';

export const selectCategories = (state) => state.categories.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
