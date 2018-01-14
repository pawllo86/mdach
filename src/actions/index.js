import axios from 'axios';
import { FETCH_PRODUCTS } from './actions';
import { BLACHODACHOWKA, TRAPEZOWA } from '../components/sections/sections';

export function fetchProducts(section) {
    const path = dataMap.get(section);
    const request = axios.get(path);
    
    return {
      type: 'FETCH_PRODUCTS',
      payload: request
    };
}

const dataMap = new Map();
dataMap.set(BLACHODACHOWKA, '/data/blachodachowka.json');
dataMap.set(TRAPEZOWA, '/data/trapezowa.json');