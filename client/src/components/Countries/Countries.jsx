
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";  
import Country from "../Country/Country";
import NavBar from "../NavBar/NavBar"
import Pager from "../Pager/Pager";
import Loading from "../Loading/Loading";
import Error404 from "../Error404/Error404";

import { getAllCountries, apiError, getCountryDetailByID, getCountryDetailByString, getActivities,
   orderCards, filterCards,filterCardsByActivity, saveCurrentePage, }
   from "../../redux/actions";


function Countries(props) {
  const { allCountries, countryByString, allActivities, countriesFound,
      filterByContinent, pagerCurrentPage, orderState, filterByActivity } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [Order, setOrder] = useState(orderState)
  const [activity, setActivity] = useState(filterByActivity)


  const [currentPage, setCurrentPage] = useState(pagerCurrentPage);
  const [countriesPerPage, setcountriesPerPage] = useState(18); // < --- Para el PI hay que setearlo en 10
  const indexLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const countriesToShow = countriesFound.slice(indexFirstCountry, indexLastCountry);


  const error = useSelector(state => state.error);

  //console.log("TODA LAS ACTIVIDADES", (allActivities[3].id))

  useEffect(() => {
    if(countriesFound.length===0 || allCountries.length===0) dispatch (getAllCountries());
    if(countryByString.length===0) dispatch (getCountryDetailByString(""))
    if(allActivities.length===0) dispatch (getActivities())

    console.log("SOY EL USEFFECT : " , filterByContinent);
    console.log("los paises: ", countriesToShow);
    console.log("keys de error: ",error)
    dispatch (filterCardsByActivity(filterByActivity))

    dispatch (filterCards(filterByContinent))



  }, [error]);
  useEffect(() => {
    // dispatch ( getCountryDetailByID(id) );
    // let wait = countryById?.capital && countryById
    if(allCountries?.length !== 0){ setLoading(false)
    }
    // dispatch(apiError(null));        CHEQUEAR ESTA PARTE; LOADING ---> ERROR, pero no resetea el error del estado
  }, [allCountries]);

  if (error) {
    console.log("keys de error: ",error)
    let msg = ""
    if(error) msg = error

    return (
    <div> 
      <Error404 error={msg}/>
      {/* <Link to={"/countries"}>
        <button> Volver </button>
      </Link> */}
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
  


  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch (saveCurrentePage(pageNumber))
  };

  const handleChangePerPage = async (event) => {
    setcountriesPerPage(event.target.value);

    // await dispatch(orderCards(Order) )
  };

  const handleChangeOrder =(event) => {
    setOrder(event.target.value);
    console.log("--------------");

    console.log(event.target.value);
    console.log(Order);

    dispatch(orderCards(event.target.value) )
  };

  // dispatch(orderCards(Order) )

  async function  handleChangeFilter(evento){
      // cuando ocurra un cambio en el valuue del input,
      // tomar ese value y guardarlo en el estado del userInput
      console.log("---------------:", evento.target.value);
      console.log("ESTE ES EL FILTRO DEL ESTADO :",filterByContinent)

      await dispatch(filterCards(evento.target.value))
     // setUserInput(evento.target.value);
  } 
  async function  handleChangeFilterActivity(event){
    // cuando ocurra un cambio en el valuue del input,
    // tomar ese value y guardarlo en el estado del userInput
    const value = event.target.value;
    setActivity(value)
    console.log("---------------++++:", value);
    console.log("ESTE ES EL FILTRO DEL ESTADO Activity:",filterByContinent)
    
    await dispatch(filterCardsByActivity(event.target.value))
   // setUserInput(evento.target.value);
} 
  // "Antarctic", "Africa", "Asia", 
  // "Europe", "North America", "Oceania", 
  // "South America", "Americas",
  // "Unknown"

  return (
    <div className={styles.countries} style={{  marginTop: "65px" }}>
      
    <NavBar/>
    { loading ? <Loading /> : 
      <div >  
      <div className={styles.filters}>
        <h1 style={{ fontSize: "16px"}}>Order</h1>
        <select id="order" 
              onChange={handleChangeOrder} value={Order}>
          <option value="az" >A - Z</option>
          <option value="za">Z - A</option>
          <option value="hp">Higher Population</option>
          <option value="lp">Lower Population</option>

        </select>

        <h1 style={{ marginLeft: "10px", fontSize: "16px"}}>Continent</h1>
        <select id="continent" style={{width:"150px"}} 
                  value={filterByContinent}
                  onChange={handleChangeFilter}
                  >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          {/* <option value="Unknown">Unknown</option> */}
        </select>

        <h1 style={{ marginLeft: "10px", fontSize: "16px"}}>Activity</h1>
        <select id="activity" style={{width:"250px"}} 
                  value={activity}
                  onChange={handleChangeFilterActivity}
                  >
          <option value="All">All</option>
          {allActivities?.map( (element) => {
            return (<option value={element?.name}>{element?.name}</option>)
          })}
          {/* <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option> */}
          {/* <option value="Unknown">Unknown</option> */}
        </select>

        <h1 style={{ marginLeft: "10px", fontSize: "16px"}}>C/Page</h1>
        <select id="perPage" style={{marginLeft: "10px", width:"60px"}} 
                value = {countriesPerPage}
                onChange = {handleChangePerPage}
                  >
          <option value="10">10</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="60">60</option>
          <option value="72">72</option>
        </select>

      
      </div>
      <Pager
            countriesPerPage={countriesPerPage}
            countries={countriesFound.length}
            paginated={paginated}
          />

      <div className={styles.cards_container}>
        {/* {console.log("len string:", countryByString.length)}
        {console.log("len all:", allCountries.length)}
        {console.log("foun all:", countriesFound.length)} */}


        {

        // ((countryByString.length !== 250) || (countryByString.length === 0)) ? (
          countriesToShow ? (
            countriesToShow.map((c) => {
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
          
          <div> 
            <Loading/>
          </div>
        )}
      </div>
      </div>
      }
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    allCountries: state.allCountries,
    allActivities: state.allActivities,
    countryByString: state.countryByString,
    countriesFound: state.countriesFound,
    filterByContinent: state.filterByContinent,
    filterByActivity: state.filterByActivity,
    pagerCurrentPage: state.pagerCurrentPage,
    orderState : state.orderState,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCountries: () => dispatch ( getAllCountries() ),
    getActivities: () => dispatch ( getActivities() ),
    getCountryDetailByString: () => dispatch ( getCountryDetailByString() ),
    saveCurrentePage: () => dispatch ( saveCurrentePage() ),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Countries);