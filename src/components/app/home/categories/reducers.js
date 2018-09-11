export const CATEGORY_LOAD = 'CATEGORY_LOAD';

export const getCategories = state => state.categories;
export const getCategoryById = (state, id) => getCategories(state)[id];

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    default: 
      return state;
  }
}