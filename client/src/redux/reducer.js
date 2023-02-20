import { 
  GET_ALL, 
  GET_COUNTRY_DETAIL_BY_ID, 
  GET_COUNTRY_DETAIL_BY_STRING,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  CREATE_ADVANCED_ACTIVITY,
  FILTER_CARDS, 
  ORDER_CARDS,
  API_ERROR,
} from "./type";

const initialState = {

  allCountries: [],
  countriesFound: [],
  allActivities: [],
  countryById: [],
  countryByString: [],
  error: null,
}

// REDUCER
export default function rootReducer(state = initialState, action) {

function sortAsc(aux){
    return aux.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

    switch(action.type) {
//------------------------------------------------------------------------- 
        case GET_ALL:  
          return{ ...state, allCountries: sortAsc(action.payload), countriesFound: sortAsc(action.payload) }
//------------------------------------------------------------------------- 
        case GET_COUNTRY_DETAIL_BY_ID:
          initialState.error = null;
          return{ ...state, countryById: action.payload }
//-------------------------------------------------------------------------       
        case GET_COUNTRY_DETAIL_BY_STRING:
          return{ ...state, countryByString: sortAsc(action.payload), countriesFound: sortAsc(action.payload) }
//-------------------------------------------------------------------------  
        case GET_ACTIVITIES:
          return{ ...state, allActivities: action.payload }
//-------------------------------------------------------------------------         
        case CREATE_ACTIVITY:
          const created = [...state.allActivities, action.payload];
          return { ...state, allActivities: [...created] };
//-------------------------------------------------------------------------         
//-------------------CHECK THIS IF IT WORKS----------------------------------         
        case CREATE_ADVANCED_ACTIVITY:
          const created1 = [...state.allActivities, action.payload];
          return { ...state, allActivities: [...created1] };
//-------------------------------------------------------------------------    
// -------------------- MODIFICAR ESTE FILTER !!!!! esta por continente ?? 
      case FILTER_CARDS: 
        if(action.payload !== "All"){
          const filtradoContinent = state.allCountries.filter(
          fav => fav.continent === action.payload
          );
          return{
            ...state,
            allCountries: filtradoContinent,
          }
        }
        else{
          return{...state.allCountries}
          // return{...state, myFavorites: state.allCharacters}
        }
//-------------------------------------------------------------------------         
      case ORDER_CARDS:
        // let filtradoOrder = [];
        if(action.payload === "Ascendente"){
          const filtradoOrder = [...state.allCountries].sort( (a, b) => a.id - b.id );
           return{ ...state, allCountries: filtradoOrder, }
        }
        else if(action.payload === "Descendente"){
          const filtradoOrder = [...state.allCountries].sort(
            (a, b) => b.id - a.id );
          return{
              ...state,
              allCountries: filtradoOrder,
          }
        
      }
//-------------------------------------------------------------------------         
      case API_ERROR:
        return { ...state, error: action.payload };
//-------------------------------------------------------------------------         
      default:
        return state;
    }
    
};
  
//   module.exports = contador;