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
  filteredCountries:[],
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

  function sortDes(aux) {
    return aux.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }

    switch(action.type) {
//------------------------------------------------------------------------- 
        case GET_ALL:  
          return{ ...state, allCountries: action.payload, countriesFound: sortAsc(action.payload) }
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
        const filteredCountries = [...state.allCountries];
        state.countriesFound = [...state.allCountries]
        console.log("soy el payload de filter",(action.payload));

        if(action.payload !== "All"){
          console.log("Estoy deltro del if !==All ");
          const filtradoContinent = state.countriesFound.filter(
          fav => fav.continent === action.payload
          );
          console.log("SOY LOS COUNTRI FILTRADOS",(filtradoContinent));
          return{
            ...state,
            countriesFound: filtradoContinent,
          }
        }
        else{
          console.log("ESTOY EN EL ELSE");
          return{ ...state, countriesFound: filteredCountries}
          // return{...state, myFavorites: state.allCharacters}
        }
//-------------------------------------------------------------------------         
      case ORDER_CARDS:
        // let filtradoOrder = [];
        if(action.payload === "za"){
          const all = sortAsc([...state.allCountries])
          const found = sortAsc([...state.countriesFound])
          return{ ...state, allCountries: all, countriesFound: found }
        }
        else if(action.payload === "az"){
          const all = sortDes([...state.allCountries])
          const found = sortDes([...state.countriesFound])
          return{ ...state, allCountries: all, countriesFound: found }
        
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