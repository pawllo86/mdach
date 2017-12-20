import { MENU_SELECTED } from '../actions/actions';

export default function(state = null, action) {
    let result = {
        header: headers.default,
        section: "main"
    }
    
    switch(action.type) {
        case MENU_SELECTED:
            return {
                header: headers[action.payload],
                section: action.payload
            };
            break;
    }
    return result;
}

const headers = {
    default: {
        title: "WYBUDOWANI.PL",
        subtitle: "Kompleksowe usługi dekarskie."
    },
    blachodachowka: {
        title: "Blachodachówka",
        subtitle: "Dachówka blaszana to najczęściej stosowane pokrycie dachowe w budynkach mieszkalnych."
    },
    trapezowa: {
        title: "Trapezowa",
        subtitle: "Blacha trapezowa stosowana zarówno w przemyśle jak i w budownictwie jednorodzinnym."
    }
}
