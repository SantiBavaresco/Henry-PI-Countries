import { ADD_FAVORITE, DELETE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./type.js";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

// REDUCER
export default function rootReducer(state = initialState, action) {
    switch(action.type) {
//------------------------------------------------------------------------- 
      case ADD_FAVORITE:
        const all= [...state.allCharacters, action.payload]
        console.log(all);
        return{
          ...state, 
          allCharacters: [...all].sort( (a,b)=> a.id - b.id),
          myFavorites: [...all].sort( (a,b)=> a.id - b.id)
          // ...state,
          // myFavorites: [...state.myFavorites, action.payload],
          // allCharacters: [...state.allCharacters, action.payload]
        }
//------------------------------------------------------------------------- 
      case DELETE_FAVORITE:
          const filtrado = state.myFavorites.filter(
            fav => fav.id !== action.payload
          );
        return{
          ...state,
          myFavorites: filtrado,
        }
//-------------------------------------------------------------------------        
      case FILTER_CARDS:
        if(action.payload !== "All"){
          const filtradoGender = state.allCharacters.filter(
          fav => fav.gender === action.payload
          );
          return{
            ...state,
            myFavorites: filtradoGender,
          }
        }
        else{
          return{...state, myFavorites: state.allCharacters}
        }
//-------------------------------------------------------------------------         
      case ORDER_CARDS:
        // let filtradoOrder = [];
        if(action.payload === "Ascendente"){
          const filtradoOrder = [...state.myFavorites].sort(
            (a, b) => a.id - b.id );
           return{
              ...state,
              myFavorites: filtradoOrder,
          }
        }
        else if(action.payload === "Descendente"){
          const filtradoOrder = [...state.myFavorites].sort(
            (a, b) => b.id - a.id );
          return{
              ...state,
              myFavorites: filtradoOrder,
          }
        
      }
      default:
        return state;
    }
    
  };
  
//   module.exports = contador;