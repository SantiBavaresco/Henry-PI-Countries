import { GET_ALL, GET_COUNTRY_DETAIL_BY_ID, GET_COUNTRY_DETAIL_BY_STRING, GET_ACTIVITIES, FILTER_CARDS, ORDER_CARDS } from "./type.js";

const initialState = {
  // myFavorites: [],
  // allCharacters: [],

  allCountries: [],
  allActivities: [],
  countryById: [],
  countryByString: [],
}

// REDUCER
export default function rootReducer(state = initialState, action) {
    switch(action.type) {
//------------------------------------------------------------------------- 
      case GET_ALL:
        let all = action.payload;
        // ordena en orden alfabetico de A-Z
          all.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });

        return{
          ...state, allCountries: all,
          //myFavorites: [...all].sort( (a,b)=> a.id - b.id)
          // ...state,
          // myFavorites: [...state.myFavorites, action.payload],
          // allCharacters: [...state.allCharacters, action.payload]
        }
//------------------------------------------------------------------------- 
        case GET_COUNTRY_DETAIL_BY_ID:
          //const all = action.payload;
          return{ ...state, countryById: action.payload }
//-------------------------------------------------------------------------       
        case GET_COUNTRY_DETAIL_BY_STRING:
          //const all = action.payload;
          return{ ...state, countryByString: action.payload }
//-------------------------------------------------------------------------  
        case GET_ACTIVITIES:
          //const all = action.payload;
          return{ ...state, allActivities: action.payload }
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
      default:
        return state;
    }
    
  };
  
//   module.exports = contador;