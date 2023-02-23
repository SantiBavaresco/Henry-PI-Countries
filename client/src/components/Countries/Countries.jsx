
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";  
import Country from "../Country/Country";
import { getAllCountries, getCountryDetailByID, getCountryDetailByString, getActivities, orderCards, filterCards}
   from "../../redux/actions";


function Countries(props) {
  const { allCountries, countryByString, allActivities, countriesFound } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Order, setOrder] = useState("az")

  const error = useSelector(state => state.error);

  //console.log("TODA LAS ACTIVIDADES", (allActivities[3].id))

  useEffect(() => {
    dispatch (getAllCountries());
    dispatch (getCountryDetailByString(""))
    //console.log(dispatch (getCountryDetailByString("islan")))
  }, []);

  if (error) {
    console.log("keys de error: ",Object.keys(error))
    return (
    <div> PAIS NO ENCONTRADO !
      <Link to={"/countries"}>
        <button> Volver </button>
      </Link>
      {/* <Outlet/> */}
    </div>)
  }



  // const filter =  useDispatch();

  // function handleChangeOrder(evento){
  //     // cuando ocurra un cambio en el valuue del input,
  //     // tomar ese value y guardarlo en el estado del userInput
  //     const value = evento.target.value;
  //     console.log("++++++ value");
  //     console.log((":", value));

  //     setOrder(value, () => {
  //       console.log('Selected value updated:', Order)})

  //     console.log("++++++ Order");
  //     console.log(("", Order));
      
  //     dispatch(orderCards(value) )
  //    // setUserInput(evento.target.value);
  //  }
   
  const handleChangeOrder = async (event) => {
    setOrder(event.target.value);
    await dispatch(orderCards(Order) )
  };

  // dispatch(orderCards(Order) )

  async function  handleChangeFilter(evento){
      // cuando ocurra un cambio en el valuue del input,
      // tomar ese value y guardarlo en el estado del userInput
      await dispatch(filterCards(evento.target.value))
     // setUserInput(evento.target.value);
  }  
  // "Antarctic", "Africa", "Asia", 
  // "Europe", "North America", "Oceania", 
  // "South America", "Americas",
  // "Unknown"

  return (
    <div style={{ minHeight: "85vh"}}>
      
      <div className={styles.filters}>
        <select id="order" onChange={handleChangeOrder} value={Order}>
          <option value="az" >A - Z</option>
          <option value="za">Z - A</option>
        </select>

        <select id="continent" style={{marginLeft: "10px"}} 
                  onChange={handleChangeFilter}
                  >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Unknown">Unknown</option>

        </select>
      </div>

      <div className={styles.cards_container}>
        {/* {console.log("len string:", countryByString.length)}
        {console.log("len all:", allCountries.length)}
        {console.log("foun all:", countriesFound.length)} */}


        {

        // ((countryByString.length !== 250) || (countryByString.length === 0)) ? (
          countriesFound ? (
            countriesFound.map((c) => {
            return (
              <Country
                key={c?.ID}
                id={c?.ID}
                name={c?.name}
                flag={c?.flag}
                continent={c?.continent}
                subregion={c?.subregion}                
              />
            );
          })
        ) : (
          // countriesFound.map((c) => {
          //   return (
          //     <Country
          //       key={c?.ID}
          //       id={c?.ID}
          //       name={c?.name}

          //       flag={c?.flag}
          //       continent={c?.continent}
          //       subregion={c?.subregion}                
          //     />
          //   );
          // }
          // )
          
          <p>No hay nada</p>
        )}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCountries: state.allCountries,
    allActivities: state.allActivities,
    countryByString: state.countryByString,
    countriesFound: state.countriesFound,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCountries: () => dispatch ( getAllCountries() ),
    getActivities: () => dispatch ( getActivities() ),
    getCountryDetailByString: () => dispatch ( getCountryDetailByString() ),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);