import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import React from "react";
import styles from "./SearchBar.module.css";
import { getCountryDetailByString } from "../../redux/actions";


function SearchBar(props) {
    const { countryByString } = props;
    const [userInput, setUserInput] = useState("");
    const searchTerm = useSelector(countryById => countryById.getCountryDetailByString);
    const [error, setError] = useState(null);
    // const { countryById } = props;
    const dispatch = useDispatch();
    
    async function  handleSearch(event){
        
        setUserInput(event.target.value)
        console.log("input", event.target.value)
        
        if(event.target.value !== ""){ 
            console.log("soy undefined");
            console.log(countryByString);
            //event.target.value = ""
            await dispatch( getCountryDetailByString(event.target.value));          
            console.log("undefined ?", event.target.value)


        }
        else 
        {
            console.log("LLAMA A LA API STRING")
            await dispatch( getCountryDetailByString(event.target.value));          
        }
        // event.preventDefault();
      }

    const handleSubmit = (event) => {
       
      };

    // useEffect(() => {
    //   dispatch ( getAllCountries() );
    //   }, []);

    


return (
    <div className={styles.search}>
          <span>&#x1F50D; </span>
          <input type="text" placeholder="Search" onChange={handleSearch} value={null}/>
        </div>
    );
}
//export default SearchBar;


export function mapStateToProps(state) {
    return {
        countryByString: state.countryByString,
    };
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
        getCountryDetailByString: () => dispatch ( getCountryDetailByString() ),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);