import React from 'react';
import { useState } from 'react';
import styles from "./ActivityCreator.module.css"
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';
import InputActivityCreator from "../InputActivityCreator/InputActivityCreator"


function ActivityCreator() {
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
  const [inputArray, setInputArray] = useState("");
  const [dualColumnArray, setDualColumnArray] = useState([]);

  

  const updateArrayItem = (newValue) => {
    setInputArray([inputArray, newValue ]);
  };

  const ActivityResponseBuilder = (inputArray, dualColumnArray) => {

  }


  function consologuero(aux){
    console.log("ESTE ES UN CONSOLELOG: ", aux)
  }
  consologuero(inputArray[1])

  return (
    
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
            <InputActivityCreator array={inputArray} updateArrayItem={updateArrayItem}  onChange={consologuero}/>

            <div className={styles.row}>
              <button type="submit">Create Activity</button>
            </div>
          </td>

          <td>
            <DualColumnScrollBarLabel/>
          </td>

        </tr>
      </tbody>
    </table>

)}

export default ActivityCreator;