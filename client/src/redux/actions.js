import { 
  GET_ALL,
  GET_COUNTRY_DETAIL_BY_ID,
  GET_COUNTRY_DETAIL_BY_STRING,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  CREATE_ADVANCED_ACTIVITY,
  FILTER_CARDS,
  ORDER_CARDS,
  SAVE_PERPAGE,
  CLEAR_STATE,
  API_ERROR,
  FILTER_CARDS_BY_ACTIVITY,
  SET_FILTER_BY_CONTINENT,
  SET_FILTER_BY_ACTIVITY,
} from "./type";
//const axios = require('axios');

const deploy = 'https://pi-countries-santi.onrender.com/'
const local = (pivot ? deploy : local) + ""
const pivot = true

export function apiError(error){
    return {
        type: API_ERROR,
        payload: error,
    }
}

// ACTION CREATORS
export function getAllCountries (){ 
    return async (dispatch) => {
        await fetch((pivot ? deploy : local) + `api/countries/`)
        .then((r)=> r.json())
        .then((data) => {
            dispatch({
                type: GET_ALL,
                payload: data
            })
        })
        .catch(error => {
            dispatch(apiError(error.message))
        })
    }
};

export function getCountryDetailByID(id){ 
    return async (dispatch) => {
        await fetch((pivot ? deploy : local) + `api/countries/id/${id}`)
            .then((r)=> r.json())
            .then((data) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL_BY_ID,
                    payload: data
                })
                dispatch(apiError(null));
            })
            .catch(error => {
                dispatch(apiError(error.message))
            })
        }
};

export function getCountryDetailByString(string){ 
    return async (dispatch) => {
        await fetch((pivot ? deploy : local) + `api/countries/s?name=${string}`)
            .then((r)=> r.json())
            .then((data) => {
                dispatch({
                    type: GET_COUNTRY_DETAIL_BY_STRING,
                    payload: data
                })
                dispatch(apiError(null));
            })
            .catch(error => {
                console.error('Error:', error);
                dispatch(apiError(`Country doesn't found`))
            })
    }
};

export function getActivities(){ 
    return async (dispatch) => {
        await fetch((pivot ? deploy : local) + `api/activities/`)
        .then((r)=> r.json())
        .then((data) => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: data
            })
            dispatch(apiError(null));
        })
        .catch(error => {
            dispatch(apiError(error.message))
        })
    }
};

export function createActivity(activity) {
    return async (dispatch) => {
      await fetch((pivot ? deploy : local) + `api/activities/CreateActivity`, {
        method: `POST`,
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
          dispatch(apiError(result));
        })
        .catch(error => {
            console.log(`***********`,Object.keys(error));
            dispatch(apiError(error.message))
        })
        
    };
  }

  export function createAdvancedActivity(activities) {
    return async (dispatch) => {
      await fetch((pivot ? deploy : local) + `api/activities/AddExistingActivitiesToCountries`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activities),
      })
        .then((r) => r.json())
        .then((result) => {
          dispatch({ 
            type: CREATE_ADVANCED_ACTIVITY, 
            payload: activities });
          dispatch(apiError(null));
        })
        .catch(error => {
            dispatch(apiError(error.message))

        })
        
    };
  }

export function filterCards (status){ 
    return {
        type: FILTER_CARDS,
        payload: status
    }
};
// export function filterCardsByActivity (status){ 
//     return {
//         type: FILTER_CARDS_BY_ACTIVITY,
//         payload: status
//     }
// };

export function orderCards (status){ 
    return {
        type: ORDER_CARDS,
        payload: status
    }
};

export function saveCurrentePage (id){ 
    return {
        type: SAVE_PERPAGE,
        payload: id
    }
};

export function clearState (id){ 
    return {
        type: CLEAR_STATE,
        payload: id
    }
};

export function clearError (status){ 
    return {
        type: CLEAR_STATE,
        payload: status
    }
};

export function setFilterByContinent (id){ 
    return {
        type: SET_FILTER_BY_CONTINENT,
        payload: id
    }
};

export function setFilterByActivity (id){ 
    return {
        type: SET_FILTER_BY_ACTIVITY,
        payload: id
    }
};


