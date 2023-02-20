
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";  
import Country from "../Country/Country";
import { getAllCountries, getCountryDetailByID, getCountryDetailByString, getActivities} from "../../redux/actions";


function Countries(props) {
  const { allCountries, countryByString, allActivities, countriesFound } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div style={{ minHeight: "85vh"}}>
      <div className={styles.cards_container}>
        {console.log("len string:", countryByString.length)}
        {console.log("len all:", allCountries.length)}
        {console.log("foun all:", countriesFound.length)}


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