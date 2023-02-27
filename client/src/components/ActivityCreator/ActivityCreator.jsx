import React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCountries, getActivities, createActivity} from "../../redux/actions";

import styles from "./ActivityCreator.module.css"
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';
import InputActivityCreator from "../InputActivityCreator/InputActivityCreator"


function ActivityCreator(props) {
  //   const [selectedOption, setSelectedOption] = useState('Option 1');
  // const [selectedActivities, setSelectedActivities] = useState([]);
  // const [selectedCountries, setSelectedCountries] = useState([]);

  // // Example data for the selector, activities, and countries
  // const selectorOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  // const activityOptions = ['Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3'];
  // const countryOptions = ['Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3',
  // 'Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2',
  //  'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1',
  //   'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3',
  //   'Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 
  //   'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2',
  //    'Country 3','Country 1', 'Country 2', 'Country 3'];

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // const handleActivityChange = (event) => {
  //   const activity = event.target.value;
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     setSelectedActivities([...selectedActivities, activity]);
  //   } else {
  //     setSelectedActivities(selectedActivities.filter((a) => a !== activity));
  //   }
  // };

  // const handleCountryChange = (event) => {
  //   const country = event.target.value;
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     setSelectedCountries([...selectedCountries, country]);
  //   } else {
  //     setSelectedCountries(selectedCountries.filter((c) => c !== country));
  //   }
  // };
  const { allCountries, allActivities} = props;
  // let empty = true;
  const dispatch = useDispatch();


  const [inputArray, setInputArray] = useState(""); // aca me viene la data del input (name,diff,dur,season)
  const [dualColumnArray, setDualColumnArray] = useState([]); // aca me viene la data del scroll (paises)
  const [random, setRandom] = useState([]);
  let ran = [];
  const [randomIsChecked, setRandomIsChecked] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  let emptyCountries = true;
  let emptyActivity = true;



  useEffect(() => {
    dispatch (getAllCountries());


    //console.log(dispatch (getCountryDetailByString("islan")))
  }, []);

  const updateArrayItem = (newValue) => {
    setInputArray([inputArray, newValue ]);
  };
  
  const updateArrayCountries = (newValue) => {
    setDualColumnArray([dualColumnArray, newValue ]);
  };
  
  const handleRandomIsChecked = (event) => {
    console.log("random es:",  event.target.checked)
    setRandomIsChecked(event.target.checked);
    //  if(emptyCountries) setRandomIsChecked(false)
    // console.log("random :",  randomIsChecked)
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
// console.log("++++++++++++++++++++++++++++++++++++++++++++");
// consologuero(allCountries)
// console.log("++++++++++++++++++++++++++++++++++++++++++++");

  // function consologuero(aux){
  //   console.log("ESTE ES UN CONSOLELOG: ", aux)
  // }
  // consologuero(inputArray[1]) // aca me viene la data del input (name,diff,dur,season)
  // consologuero(dualColumnArray[1])
  // console.log("ESTOS SON LOS PASISES", consologuero(dualColumnArray[1]))

  const handleSubmit = (event) => {
    event.preventDefault();

    if(dualColumnArray[1][0].length === 0) { emptyCountries=true; }
    else { emptyCountries=false }

    if(inputArray[1]===undefined) { emptyActivity = true; }
    else { emptyActivity = false; }

    if(random.length !== 0 && !emptyActivity) {
      // console.log("////////////////RANDOM HABILITADO");
      // console.log(ActivityResponseBuilder(inputArray[1], random))
      props.createActivity( ActivityResponseBuilder(inputArray[1], random) )
      handleReturn()
    }
    else if(!emptyActivity && !emptyCountries && random.length === 0){
      // console.log(ActivityResponseBuilder(inputArray[1], dualColumnArray[1][0]))
      props.createActivity (ActivityResponseBuilder(inputArray[1], dualColumnArray[1][0]) )
      handleReturn()
    }

  };


  return (
  <div>
    <table>
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
    createActivity: (activity) => dispatch( createActivity(activity) )

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityCreator);