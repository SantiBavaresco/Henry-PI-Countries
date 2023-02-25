
import React from "react";
import styles from "./Countries.module.css"
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";  
import Country from "../Country/Country";
import Pager from "../Pager/Pager";
import { getAllCountries, getCountryDetailByID, getCountryDetailByString, getActivities, orderCards, filterCards}
   from "../../redux/actions";


function Countries(props) {
  const { allCountries, countryByString, allActivities, countriesFound } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Order, setOrder] = useState("az")

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setcountriesPerPage] = useState(24);
  const indexLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const countriesToShow = countriesFound.slice(indexFirstCountry, indexLastCountry);


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
   


  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangePerPage = async (event) => {
    setcountriesPerPage(event.target.value);
    // await dispatch(orderCards(Order) )
  };

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
        <h1 style={{ fontSize: "16px"}}>Order</h1>
        <select id="order" style={{marginLeft: "10px"}}
              onChange={handleChangeOrder} value={Order}>
          <option value="az" >A - Z</option>
          <option value="za">Z - A</option>
        </select>

        <h1 style={{ marginLeft: "10px", fontSize: "16px"}}>Continent</h1>
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

        <h1 style={{ marginLeft: "10px", fontSize: "16px"}}>C/Page</h1>
        <select id="perPage" style={{marginLeft: "10px", width:"60px"}} 
                  onChange={handleChangePerPage}
                  >
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