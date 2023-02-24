import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import Mapita from './mapita';

// import ActivityCreator from "../ActivityCreator/ActivityCreator"



import React from "react";
//import { useDispatch } from "react-redux";
//import { getAllCountries, getActivities, getCountryDetailByID } from "../../redux/actions";


   
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

  const [imageLoaded, setImageLoaded] = useState(false);
  console.log("-----------------------------");
  console.log(id)

  // await getmapita(countryById.maps)
  
//   async function getCountries() {
//     await dispatch( getAllCountries() ) 
//     await dispatch( getActivities() )
//   }

  useEffect(() => {
    dispatch ( getCountryDetailByID(id) );

    const img = new Image();
    img.addEventListener('load', () => {
      setImageLoaded(true);
    });
    img.src = "https://staticmap.php?center=45.71,-52.21&zoom=14&size=865x512&maptype=mapnik"

    // https://www.openstreetmap.org/#map=3/-45.71/-52.21

  }, []);

  function handleReturn() {
    window.history.back()
  }

  return (
    <div>
      <img src={countryById.flag} alt="No IMG" />
      {/* {detail.dishTypes ? <h3>{detail.dishTypes.join(", ")}</h3> : <h3></h3>}
      {detail.diets ? <h3>{detail.diets.join(", ")}</h3> : <h3></h3>} */}
      <h4></h4>
      <h1>{countryById.name}</h1>
      <h4>
        Capital: {countryById.capital}<br />
        Continent: {countryById.continent}<br />
        Subregion: {countryById.subregion}<br />
        Area: {countryById.area} km2<br />
        Population: {countryById.population}<br />
        Time-Zone: {countryById.timezone}<br />
        Map: {countryById.maps}<br />
        {/* Activities: {countryById.Activities}<br /> */}

      </h4>
      {/* <!-- Create a Twitter profile picture in grayscale, with a white border --> */}
      {/* apikey = sVkiE6XMMn0rowhh3kPGBrDtJyUkow0KCfEBqkDY */}
      {/* <img src="https://onesimpleapi.com/api/screenshot?token=sVkiE6XMMn0rowhh3kPGBrDtJyUkow0KCfEBqkDY&output=redirect&url=https://www.openstreetmap.org/relation/286393"/> */}
    
      {/* <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/relation/286393" style="border: 1px solid black"> </iframe> */}
      {/* <br/>
      <small>
        <a href="https://www.openstreetmap.org/relation/286393">Ver mapa más grande</a></small> */}
      {/* <Mapita></Mapita> */}
      {/* <img src={countryById.maps} alt="No IMG" /> */}

      
      <h4> Activities: {countryById.Activities.map( (e) =>{ return <li> { e } </li>})}</h4>

      {/* <ActivityCreator/> */}

      <div>
      {!imageLoaded && <p>Loading image...</p>}
      {imageLoaded && <img src= "https://staticmap.php?center=40.714728,-73.998672&zoom=14&size=865x512&maptype=mapnik"
      alt="Custom Image" />}
    </div>

      <button onClick={handleReturn}>Back</button>
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

