import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import React from "react";
import styles from "./SearchBar.module.css";
import { getCountryDetailByID } from "../../redux/actions";


function SearchBar() {
    const [userInput, setUserInput] = useState("");

    // const { countryById } = props;
    const dispatch = useDispatch();
  
    function handleChange(event){
      console.log(event.target.value)
      setUserInput(event.target.value);
      getCountryDetailByID(event.target.value)
    }


   

    // useEffect(() => {
    //   dispatch ( getAllCountries() );
    //   }, []);

    


return (
    <div className={styles.search}>
          <span>&#x1F50D; </span>
          <input type="text" placeholder="Search" onChange={handleChange}/>
        </div>
    );
}
//export default SearchBar;

export function mapStateToProps(state) {
    return {
        countryById: state.countryById,
    };
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
        getCountryDetailByID: () => dispatch ( getCountryDetailByID() ),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);