import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./type";

// ACTION CREATORS
export function addFavorite (obj){ 
    return {
        type: ADD_FAVORITE,
        payload: obj
    }
};

export function deleteFavorite(obj){ 
    return {
        type: DELETE_FAVORITE,
        payload: obj
    };
};

export function filterCards (status){ 
    return {
        type: FILTER_CARDS,
        payload: status
    }
};

export function orderCards (id){ 
    return {
        type: ORDER_CARDS,
        payload: id
    }
};