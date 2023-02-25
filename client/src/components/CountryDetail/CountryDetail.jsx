import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import styles from "./CountryDetail.module.css"
import {zoomValue, validateName} from './ValidateZoomAndName';


// import ActivityCreator from "../ActivityCreator/ActivityCreator"



import React from "react";
//import { useDispatch } from "react-redux";
//import { getAllCountries, getActivities, getCountryDetailByID } from "../../redux/actions";

import Linker from './Linker';
   
import { getCountryDetailByID } from "../../redux/actions";

// function getmapita(map){
//   const mapita = `https://onesimpleapi.com/api/screenshot?token=WWYzLLqSIuGs06AOA5iKxp7JswvejfSaCiCKRb4v&output=redirect
//   &screen=phone-landscape&url=${map}`
//   return mapita
// }



export function CountryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { countryById } = props;



  // const [imageLoaded, setImageLoaded] = useState(false);
  console.log("-----------------------------");
  console.log(id)

  // await getmapita(countryById.maps)
  
//   async function getCountries() {
//     await dispatch( getAllCountries() ) 
//     await dispatch( getActivities() )
//   }

  useEffect(() => {
    dispatch ( getCountryDetailByID(id) );

  }, []);

  function handleReturn() {
    window.history.back()
  }


  return (
    <div >
      {/* <div style={{display:"flex", justifyContent: "space-evenly"}}>
        <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
      </div> */}

      <div className={styles.country_countainer}>
        
        <div style={{maxWidth:"45vw"}} >

           <h1 className={styles.textH1}>{countryById.name}</h1>
          
          <div className={styles.country_info}>
          <img src={countryById.flag} alt="No IMG" />
          {/* {detail.dishTypes ? <h3>{detail.dishTypes.join(", ")}</h3> : <h3></h3>}
          {detail.diets ? <h3>{detail.diets.join(", ")}</h3> : <h3></h3>} */}
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <h4 className={styles.textH4}>
                  Capital: {countryById.capital}<br />
                  Continent: {countryById.continent}<br />
                  Subregion: {countryById.subregion}<br />
                  Area: {countryById.area} km2<br />
                  Population: {countryById.population}<br />
                  Time-Zone: {countryById.timezone}<br />
                  {/* Map: {countryById.maps}<br /> */}
                </h4>
              </div>
              <div style={{ flex: 1 }}>
                <h4 className={styles.textH4}>
                  Activities: 
                  {countryById.Activities?.map((e) => { return <li> {e} </li> })}
                </h4>
              </div>
           </div>
          </div>
        </div>

        <div className={styles.country_map}>
          <Linker href={countryById.maps}>
            <img 
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${validateName(countryById.name)}
              &zoom=${zoomValue(countryById.area, countryById.ID)}
              &size=640x640&maptype=roadmap
              &key=AIzaSyCiaBwsIYOlBZ12Sn_gxp8O-c_mIQ3j3D8`} 
              alt="No IMG" 
            />
          </Linker>
        </div>
        {/* <h4> Activities: {countryById.Activities.map( (e) =>{ return <li> { e } </li>})}</h4> */}
        {/* <ActivityCreator/> */}

      </div>

      <div style={{display:"flex", justifyContent: "space-evenly"}}>
        <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
      </div>

    </div>
  );
}

export function mapStateToProps(state) {
  return {
    countryById: state.countryById, // esto es para que me traiga el estado countriById
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    getCountryDetailByID: (ID) => dispatch ( getCountryDetailByID(ID) ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);

