import { combineReducers } from 'redux';
import ContextReducer from './context-reducer'
import ProductReducer from './product-reducer';
import ProductSelectedReducer from './product-selected-reducer'

const rootReducer = combineReducers({
  context: ContextReducer,
  products: ProductReducer,
  selectedProduct: ProductSelectedReducer
});

export default rootReducer;
