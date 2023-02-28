import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import styles from "./CountryDetail.module.css"
import {zoomValue, validateName} from './ValidateZoomAndName';
import Loading from "../Loading/Loading";



// import ActivityCreator from "../ActivityCreator/ActivityCreator"



import React from "react";
//import { useDispatch } from "react-redux";
//import { getAllCountries, getActivities, getCountryDetailByID } from "../../redux/actions";

import Linker from './Linker';
import PopUpActivity from "../PopUpActivity/PopUpActivity"
   
import { getCountryDetailByID, clearState } from "../../redux/actions";

// function getmapita(map){
//   const mapita = `https://onesimpleapi.com/api/screenshot?token=WWYzLLqSIuGs06AOA5iKxp7JswvejfSaCiCKRb4v&output=redirect
//   &screen=phone-landscape&url=${map}`
//   return mapita
// }



export function CountryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { countryById } = props;
  const [loading, setLoading] = useState(true)



  // const [imageLoaded, setImageLoaded] = useState(false);
  console.log("-----------------------------");
  console.log(id)

  // await getmapita(countryById.maps)
  
//   async function getCountries() {
//     await dispatch( getAllCountries() ) 
//     await dispatch( getActivities() )
//   }

  // const algo = ""
  // let hex = "  😀".codePointAt(0).toString(16)
  // let emo = String.fromCodePoint("0x"+hex);
  useEffect(() => {
    dispatch ( getCountryDetailByID(id) );
    // let wait = countryById?.capital && countryById
  }, []);

  useEffect(() => {
    // dispatch ( getCountryDetailByID(id) );
    // let wait = countryById?.capital && countryById
    if(countryById?.length !== 0){ setLoading(false)
    }
  }, [countryById]);

  

  function handleReturn() {
    window.history.back()
  }
console.log("🎪 🗿 🏌 🤾 🐠 🐟 ⛺ 🏂 ⛷  🌲 🏇 ️⛳️ 🎣")
 const emoji = "🦍";
 const emoji1 = ["🌴", "ola", "🚙", "🏰", "🚶", "🚵", ];


  return (
    <div className={styles.countryDetail} style={{  marginTop: "65px" }} >
      { loading ? <Loading/> :  
        <div>
          {/* *********************************** ALL DETAIL ***********************************  */}
          <div className={styles.country_countainer}>
            <div style={{maxWidth:"45vw",}} >
              <h1 className={styles.textH1}>{countryById?.name}</h1> {/* ------------ TITLE ------------ */}
              {/* -------------------------------------- SPECTS -------------------------------------- */}
                <div className={styles.country_info}>
                  <img src={countryById?.flag} alt="No IMG" />
                </div>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                      <h4 className={styles.textH4}>
                        Capital: {countryById?.capital}<br />
                        Continent: {countryById?.continent}<br />
                        Subregion: {countryById?.subregion}<br />
                        Area: {countryById?.area} km2<br />
                        Population: {countryById?.population}<br />
                        Time-Zone: {countryById?.timezone}<br />
                      </h4>
                    </div>
                    {/* +++++++++++++++++++++ ACTIVITIES +++++++++++++++++++++ */}
                    <div style={{ flex: 1 }}>
                      <h4> &#x1F334;
&#x1F30A;
&#x1F699;
&#x1F3F0;
&#x1F6B6;
&#x1F6B5;
&#x1F3BF;
&#x1F3C2;
&#x1F93E;
&#x1F304;
&#x1F3C7;
&#x1F3CC;
&#x1F3AA;
&#x26FA;
&#x1F5FF;
&#x1F332;
&#x1F41F;
&#x1F420;
&#x1F5FB;</h4>
                      <h4 className={styles.textH4}>
                        Activities:  
                        {countryById?.Activities?.map((e) => { return <div style={{ display: "flex", marginLeft: "20px"}}> {emoji}  <PopUpActivity name={e}/> </div> })}
                      </h4>
                    </div>
                    {/* +++++++++++++++++++ END ACTIVITIES +++++++++++++++++++ */}
                  </div>
                </div>
              {/* ------------------------------------- END SPECTS ------------------------------------- */}
            </div>
            <div className={styles.country_map}>
              {/* --------------------------------------- MAP --------------------------------------- */}
              <Linker href={countryById.maps}>
                <img 
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${validateName(countryById.name)}
                  &zoom=${zoomValue(countryById.area, countryById.ID)}
                  &size=640x640&maptype=roadmap
                  &key=AIzaSyCiaBwsIYOlBZ12Sn_gxp8O-c_mIQ3j3D8`} 
                  alt="No IMG" 
                />
              </Linker>
              {/* ------------------------------------- END MAP -------------------------------------*/}
            </div>     
          </div>
          {/* *********************************** END DETAIL ***********************************  */}
            <hr />
          <div style={{display:"flex", justifyContent: "space-evenly"}}>
            <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
          </div>
        </div>
      }   
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
    clearState: () => dispatch( clearState() )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);

