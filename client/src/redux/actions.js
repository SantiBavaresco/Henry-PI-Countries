import { GET_ALL, GET_COUNTRY_DETAIL_BY_ID, GET_COUNTRY_DETAIL_BY_STRING, GET_ACTIVITIES, CREATE_ACTIVITY, FILTER_CARDS, ORDER_CARDS } from "./type";
//const axios = require('axios');

// ACTION CREATORS
export function getAllCountries (){ 
    return async (dispatch) => {
        await fetch("http://localhost:3001/api/countries")
        .then((r)=> r.json())
        .then((data) => {
            dispatch({
                type: GET_ALL,
                payload: data
            })
        })
    }
};

export function getCountryDetailByID(id){ 
    return async (dispatch) => {
        await fetch(`http://localhost:3001/api/countries/id/${id}`)
            .then((r)=> r.json())
            .then((data) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL_BY_ID,
                    payload: data
                })
            })
        }
};

export function getCountryDetailByString(string){ 
    return async (dispatch) => {
        await fetch(`http://localhost:3001/api/countries/s?name=${string}`)
            .then((r)=> r.json())
            .then((data) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL_BY_STRING,
                    payload: data
                })
            })
    }
};

export function getActivities(){ 
    return async (dispatch) => {
        await fetch("http://localhost:3001/api/activities/")
        .then((r)=> r.json())
        .then((data) => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: data
            })
        })
    }
};

export function createRecipe(activity) {
    return async (dispatch) => {
      await fetch("http://localhost:3001/api/activities/CreateActivity", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
      })
        .then((r) => r.json())
        .then((result) => {
          dispatch({ 
            type: CREATE_ACTIVITY, 
            payload: activity });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  }

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

