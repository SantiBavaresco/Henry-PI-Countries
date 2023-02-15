
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Country from "../Country/Country";
import { getAllCountries } from "../../redux/actions";


function Countries(props) {
  const { allCountries } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch ( getAllCountries() );
  }, []);

  return (
    <div >
      <div className={styles.cards_container}>
        {allCountries ? (
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
        ) : (
          <p>No hay nada</p>
        )}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCountries: state.allCountries,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCountries: () => dispatch ( getAllCountries() ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);