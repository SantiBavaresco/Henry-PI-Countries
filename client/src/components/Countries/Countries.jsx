
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Country from "../Country/Country";
import { getAllCountries, getCountryDetailByID, getCountryDetailByString } from "../../redux/actions";


function Countries(props) {
  const { allCountries, countryByString } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (getAllCountries());
    // dispatch (getCountryDetailByString())
    //console.log(dispatch (getCountryDetailByString("islan")))
  }, []);

  return (
    <div >
      <div className={styles.cards_container}>
        {console.log("len string:", countryByString.length)}
        {console.log("len all:", allCountries.length)}

        {

        ((countryByString.length !== 250) || (countryByString.length === 0)) ? (
          countryByString.map((c) => {
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
          allCountries.map((c) => {
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
          // <p>No hay nada</p>
        )}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCountries: state.allCountries,
    countryByString: state.countryByString
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCountries: () => dispatch ( getAllCountries() ),
    getCountryDetailByString: () => dispatch ( getCountryDetailByString() ),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);