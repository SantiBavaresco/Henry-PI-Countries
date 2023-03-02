import React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCountries, getActivities, createActivity, clearError} from "../../redux/actions";

import styles from "./ActivityCreator.module.css"
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';
import InputActivityCreator from "../InputActivityCreator/InputActivityCreator"
import Error404 from "../Error404/Error404";


function ActivityCreator(props) {

  const { allCountries, allActivities} = props;
  const dispatch = useDispatch();

  const [inputArray, setInputArray] = useState(""); // aca me viene la data del input (name,diff,dur,season)
  const [dualColumnArray, setDualColumnArray] = useState([]); // aca me viene la data del scroll (paises)
  const [random, setRandom] = useState([]);
  let ran = [];
  const [randomIsChecked, setRandomIsChecked] = useState(false);
  // const [formSuccess, setFormSuccess] = useState(false);

  const error = useSelector(state => state.error);


  let emptyCountries = true;
  let emptyActivity = true;



  useEffect(() => {
    dispatch (getAllCountries());
  }, []);

  const updateArrayItem = (newValue) => {
    setInputArray([inputArray, newValue ]);
  };
  
  const updateArrayCountries = (newValue) => {
    setDualColumnArray([dualColumnArray, newValue ]);
  };
  
  const handleRandomIsChecked = (event) => {
    setRandomIsChecked(event.target.checked);
  };


  const handleRandomChange = (event) => {
    const value = event.target.value;
        if (event.target.checked) {
          setRandom([...random, value]);
        }
        else {
          setRandom(random.filter((e) => e !== value));
        }
  }


  const ActivityResponseBuilder = (inputArray, dualColumnArray) => {
    return { 
              name: inputArray[0],
              difficulty: inputArray[1],
              duration: inputArray[2],
              season: inputArray[3],
              arrayCountries: dualColumnArray,
            }
  }

  function handleReturn() {
    window.history.back()
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    if(dualColumnArray[1][0].length === 0) { emptyCountries=true; }
    else { emptyCountries=false }

    if(inputArray[1]===undefined) { emptyActivity = true; }
    else { emptyActivity = false; }

    if(random.length !== 0 && !emptyActivity) {
      props.createActivity( ActivityResponseBuilder(inputArray[1], random) )
      handleReturn()
    }
    else if(!emptyActivity && !emptyCountries && random.length === 0){
      props.createActivity (ActivityResponseBuilder(inputArray[1], dualColumnArray[1][0]) )
      handleReturn()
    }

  //   const hola = error && error 
  //   console.log("ERROR STATUS: ", hola)

  //   if (hola.indexOf("Unexpected token 'A'") !== -1)
  //   {
  //     console.log("ENTRE AL SUCCED");
  //     alert("Activity created succesfully !");
  //   }
  //   else if ((error != "Unexpected token 'D'")) {
  //     console.log("ENTRE AL ERROR");
  //     let msg = "Duplicated Key"
      
  //     return (
  //       <div> 
  //         <Error404 error={msg}/>
  //       </div>
  //     )
  //   }else{
  //     console.log("ENTRE AL SUCCED");
  //     alert("Activity created succesfully !");
  //  }
    
    // if(error?.message === null) {alert("Activity created succesfully !");}

    // else if (error == "Unexpected token 'A'") {
    //   let msg = "Duplicated Key"
    //   // if(error) msg = error;
      
    //   return (
    //     <div> 
    //       <Error404 error={msg}/>
    //     </div>
    //   )
    // }
    
    // dispatch (clearError(null))()
  };


  return (
  <div className={styles.tableBG}>
    <table className={styles.tableCreate}>
      <thead>
        <tr>
          {/* <th>Select an option</th> */}
          <th>Create New Activity</th>
          <th>Select countries</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          {/* <ChildComponent onArrayUpdate={(newArray) => setMyArray(newArray)} /> */}
            <InputActivityCreator array={inputArray} updateArrayItem={updateArrayItem}  />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <div >
                  <div className={styles.row}>
                    <button type="submit" onClick={handleSubmit} disabled={false} >Create Activity</button>
                  </div>
                </div>
                <div >
                  <div className={styles.row}>
                    <label>
                        <input type="checkbox" value="Random" checked={random.includes("Random")} 
                          onClick={handleRandomChange} onChange={handleRandomIsChecked}
                        />
                      Random Countries (Ignores the selected countries &#x27A1;).
                    </label>
                  </div>
                </div>
            </div>
          </td>
          <td >
            <DualColumnScrollBarLabel array={dualColumnArray} 
                updateArrayCountries={updateArrayCountries}  
                AllCountries={allCountries} 
                disabled={randomIsChecked}
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{display:"flex", justifyContent: "space-evenly"}}>
              <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
            </div>
  </div>
)}

// export default ActivityCreator;

export function mapStateToProps(state) {
  return {
    allCountries: state.allCountries,
    allActivities: state.allActivities,

  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllCountries: () => dispatch ( getAllCountries() ),
    getActivities: () => dispatch ( getActivities() ),
    createActivity: (activity) => dispatch( createActivity(activity) ),
    clearError: () => dispatch ( clearError() ),


  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCreator);