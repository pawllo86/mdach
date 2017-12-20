import { MENU_SELECTED, PRODUCT_SELECTED } from './actions';

export function selectMenuItem(item) {
    return {
        type: MENU_SELECTED,
        payload: item
    }
}
export function selectProduct(product) {
    return {
        type: PRODUCT_SELECTED,
        payload: product
    }
}