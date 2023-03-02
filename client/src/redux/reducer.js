import { 
  GET_ALL, 
  GET_COUNTRY_DETAIL_BY_ID, 
  GET_COUNTRY_DETAIL_BY_STRING,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  CREATE_ADVANCED_ACTIVITY,
  FILTER_CARDS, 
  FILTER_CARDS_BY_ACTIVITY,
  ORDER_CARDS,
  API_ERROR,
  CLEAR_STATE,
  CLEAR_ERROR,
  SAVE_PERPAGE,
  SET_FILTER_BY_CONTINENT,
  SET_FILTER_BY_ACTIVITY,
} from "./type";

const initialState = {

  allCountries: [],
  countriesFound: [],
  allActivities: [],
  countryById: {},
  countryByString: [],
  filteredCountriesByContinent:[],
  filteredCountriesByActivity:[],
  filterByContinent:"All",
  filterByActivity: "All",
  orderState:"az",
  pagerCurrentPage: 1,
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

function sortPopAsc(aux){
    return aux.sort((a, b) => {
      return a.population - b.population;
    });
  }

  function sortPopDes(aux) {
    return aux.sort((a, b) => {
      return b.population - a.population;
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
          return{ ...state, allActivities: action.payload}
//-------------------------------------------------------------------------         
        case CREATE_ACTIVITY:
          const created = [...state.allActivities, action.payload];
          return { ...state, allActivities: [...created]  };
//-------------------------------------------------------------------------         
//-------------------CHECK THIS IF IT WORKS----------------------------------         
        case CREATE_ADVANCED_ACTIVITY:
          const created1 = [...state.allActivities, action.payload];
          return { ...state, allActivities: [...created1] };
//-------------------------------------------------------------------------    
        case FILTER_CARDS:{ 
          
          const auxAllCountries = [...state.allCountries];
          state.countriesFound = [...state.allCountries]

          if( (state.filterByActivity === "All") && (state.filterByContinent === "All") ){
            return{
            ...state,  
            countriesFound: auxAllCountries, 
            filterByContinent: action.payload}
          }

          else if( (state.filterByActivity === "All") && (state.filterByContinent !== "All")){
            const filterCountry = auxAllCountries.filter(
                fav => { if( (fav.continent === state.filterByContinent )) return fav } 
              );
            return{
              ...state,  
              countriesFound: filterCountry, 
              filterByContinent: action.payload
            }
          }
          
          else if ( (state.filterByActivity !== "All")  && (state.filterByContinent === "All") ) {
            const filterCountry = state.countriesFound.filter(
                fav => {
                  if(( ( fav.Activities?.includes( state.filterByActivity )) ) 
                  )return fav;
                })
            return{
              ...state,  
              countriesFound: filterCountry, 
              filterByContinent: action.payload
            }  
          }

          else if ( (state.filterByActivity !== "All")  && (state.filterByContinent !== "All") ){
            const filterCountry = state.countriesFound.filter(
              fav => {
                if(( ( fav.Activities?.includes( state.filterByActivity )) && (fav.continent === state.filterByContinent ) ) 
                )return fav;
              })
            return{
              ...state,  
              countriesFound: filterCountry, 
              filterByContinent: action.payload
            }  
          }

        }

//-------------------------------------------------------------------------              
      case ORDER_CARDS:
        // let filtradoOrder = [];
        switch(action.payload) {
            
            case "az":{
              state.orderState = action.payload
              const all = sortAsc([...state.allCountries], "name")
              const found = sortAsc([...state.countriesFound], "name")
              return{ ...state, allCountries: all, countriesFound: found }
            }
            case "za":{
              state.orderState = action.payload
              const all = sortDes([...state.allCountries],)
              const found = sortDes([...state.countriesFound],)
              return{ ...state, allCountries: all, countriesFound: found }
            }
            
            case "lp":{
              state.orderState = action.payload
              const all = sortPopAsc([...state.allCountries],)
              const found = sortPopAsc([...state.countriesFound], ) 
              return{ ...state, allCountries: all, countriesFound: found }
            } 
            
            case "hp":{
              state.orderState = action.payload
              const all = sortPopDes([...state.allCountries],)
              const found = sortPopDes([...state.countriesFound],)
              return{ ...state, allCountries: all, countriesFound: found }
            }
            
        }
        // if(action.payload === "za"){
        //   const all = sortAsc([...state.allCountries], "name")
        //   const found = sortAsc([...state.countriesFound], "name")
        //   return{ ...state, allCountries: all, countriesFound: found }
        // }
        // else if(action.payload === "az"){
        //   const all = sortDes([...state.allCountries],)
        //   const found = sortDes([...state.countriesFound],)
        //   return{ ...state, allCountries: all, countriesFound: found }
        // }
        // else if(action.payload === "hp"){
        //   const all = sortPopAsc([...state.allCountries],)
        //   const found = sortPopAsc([...state.countriesFound], )
        //   return{ ...state, allCountries: all, countriesFound: found }
        // }
        // else if(action.payload === "lp"){
        //   const all = sortPopDes([...state.allCountries],)
        //   const found = sortPopDes([...state.countriesFound],)
        //   return{ ...state, allCountries: all, countriesFound: found }
        // }
//-------------------------------------------------------------------------         
      case SAVE_PERPAGE:
        return { ...state, pagerCurrentPage: action.payload };
//-------------------------------------------------------------------------         
      case API_ERROR:
        return { ...state, error: action.payload };
//-------------------------------------------------------------------------   
      case CLEAR_STATE:
        // const created1 = [...state.allActivities, action.payload];
        const auxiliar = action.payload // countryById       -------------------> preguntar a rosi si se puede hacer
        return { ...state, countryById: [] };
//-------------------------------------------------------------------------   
      case CLEAR_ERROR:
        return { ...state, error : action.payload}

      case SET_FILTER_BY_CONTINENT:{
        return{
          ...state, filterByContinent: action.payload
        }
      }
      case SET_FILTER_BY_ACTIVITY:{
        return{
          ...state, filterByActivity: action.payload
        }
      }
      default:
        return state;
    }
    
};
  
//   module.exports = contador;