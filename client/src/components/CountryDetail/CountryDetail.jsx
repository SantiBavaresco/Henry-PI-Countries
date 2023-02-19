import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
// import ActivityCreator from "../ActivityCreator/ActivityCreator"



import React from "react";
//import { useDispatch } from "react-redux";
//import { getAllCountries, getActivities, getCountryDetailByID } from "../../redux/actions";


   
import { getCountryDetailByID } from "../../redux/actions";

export function CountryDetail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { countryById } = props;
  console.log("-----------------------------");
  console.log(id)
  
  
//   async function getCountries() {
//     await dispatch( getAllCountries() ) 
//     await dispatch( getActivities() )
//   }

  useEffect(() => {
    dispatch ( getCountryDetailByID(id) );
  }, [id]);

  return (
    <div>
      <h1>{countryById.name}</h1>
      <img src={countryById.flag} alt="No IMG" />
      {/* {detail.dishTypes ? <h3>{detail.dishTypes.join(", ")}</h3> : <h3></h3>}
      {detail.diets ? <h3>{detail.diets.join(", ")}</h3> : <h3></h3>} */}
      <h4></h4>
      <h4>{countryById.capital}</h4>
      <h4>{countryById.continent}</h4>
      <h4>{countryById.subregion}</h4>
      <h4>{countryById.area} km2</h4>
      <h4>{countryById.population}</h4>
      <h4>{countryById.timezone}</h4>
      <h4>{countryById.maps}</h4>
      <h4>{countryById.Activities}</h4>
      {/* <ActivityCreator/> */}


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

