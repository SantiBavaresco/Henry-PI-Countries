import React from 'react';
import { useState , useEffect } from 'react';
import styles from "./AdvancedActivityCreator.model.css"
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCountries, getActivities, createActivity} from "../../redux/actions";
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';


function AdvancedActivityCreator(props) {
  const dispatch = useDispatch();
  const { allCountries, allActivities} = props;
  // let empty = true;



    const [selectedOption, setSelectedOption] = useState('Option 1');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  // Example data for the selector, activities, and countries

  const activityOptions = allActivities.map( (element)=> {return element.name})


     const [inputArray, setInputArray] = useState([]); // aca me viene la data del input (name,diff,dur,season)
     const [dualColumnArray, setDualColumnArray] = useState([]); // aca me viene la data del scroll (paises)

     const [formSuccess, setFormSuccess] = useState(false);
   
     let emptyCountries = true;
     let emptyActivity = true;


     useEffect(() => {
      dispatch (getAllCountries());
      dispatch (getActivities());

      console.log("ACTIVIDDES: ", allActivities?.map( (element)=> {return element.id}))
      console.log("Selected countries: ", dualColumnArray?.[1]?.[0]);  //-------------------- tira error con undefined
      // console.log("Selected countries 2: ", selectedCountries);

      console.log("actividades cheked useefect: ", selectedActivities);



  
  
      //console.log(dispatch (getCountryDetailByString("islan")))
    }, [selectedActivities, dualColumnArray]);
  
    // const updateArrayItem = (newValue) => {
    //   setInputArray([inputArray, newValue ]);
    //   console.log("Selected activities: ", inputArray);
    // };
    
    const updateArrayCountries = (newValue) => {
      setDualColumnArray([dualColumnArray, newValue ]);
      // console.log("Selected countries: ", dualColumnArray[1]);

    };
    

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedActivities([...selectedActivities, activity]);
    } else {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity));
    }
    console.log("actividades cheked: ", selectedActivities);

  };

  // const handleCountryChange = (event) => {
  //   const country = event.target.value;
  //   const isChecked = event.target.checked;
  //   if (isChecked) {
  //     setSelectedCountries([...selectedCountries, country]);
  //   } else {
  //     setSelectedCountries(selectedCountries.filter((c) => c !== country));
  //   }
  // };

const handleSubmit = (event) => {
    event.preventDefault();

    if(dualColumnArray[1][0].length === 0) { emptyCountries=true; }
    else { emptyCountries=false }

    if(inputArray[1]===undefined) { emptyActivity = true; }
    else { emptyActivity = false; }

    if(!emptyActivity && !emptyCountries ){
      // console.log(ActivityResponseBuilder(inputArray[1], dualColumnArray[1][0]))

      // props.createActivity (ActivityResponseBuilder(inputArray[1], dualColumnArray[1][0]) )
      handleReturn()
    }

  };

  function handleReturn() {
    window.history.back()
  }

  return (
  <div>
    <table >
      <thead>
        <tr>
          {/* <th>Select an option</th> */}
          <th>Select activities</th>
          <th>Select countries</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>
            <select value={selectedOption} onChange={handleOptionChange}>
              {selectorOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td> */}
          <td>
            {activityOptions.map((activity, index) => (
              <div key={index} style={{ display: "flex" }}>
                <label style={{width: "27vw"}}>
                  <input
                    type="checkbox"
                    value={activity}
                    checked={selectedActivities.includes(activity)}
                    onChange={handleActivityChange}
                    // onClick = {updateArrayItem}
                  />
                  {activity}
                </label>
              </div>
            ))}
            

          </td>
          <td>
          <DualColumnScrollBarLabel 
            array={dualColumnArray} 
            updateArrayCountries={updateArrayCountries}  
            AllCountries={allCountries} 
            // disabled={randomIsChecked}
          />
          </td>
          {/* <td>
            {countryOptions.map((country, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={country}
                    checked={selectedCountries.includes(country)}
                    onChange={handleCountryChange}
                  />
                  {country}
                </label>
              </div>
            ))}
          </td> */}
        </tr>
      </tbody>
    </table>
    <div style={{display:"flex", justifyContent: "space-evenly"}}>
      <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
    </div>
  </div>

    // <div>
    //   <header>
    //     <h1>Table Header</h1>
    //   </header>
    //   <div className="container">
    //     <aside>
    //       <h2>Table Aside</h2>
    //     </aside>
    //     <main>
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Column 1</th>
    //             <th>Column 2</th>
    //             <th>Column 3</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>Row 1, Column 1</td>
    //             <td>Row 1, Column 2</td>
    //             <td>Row 1, Column 3</td>
    //           </tr>
    //           <tr>
    //             <td>Row 2, Column 1</td>
    //             <td>Row 2, Column 2</td>
    //             <td>Row 2, Column 3</td>
    //           </tr>
    //           <tr>
    //             <td>Row 3, Column 1</td>
    //             <td>Row 3, Column 2</td>
    //             <td>Row 3, Column 3</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </main>
    //   </div>
    // </div>
)}

// export default AdvancedActivityCreator;

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
    createActivity: (activity) => dispatch( createActivity(activity) ) // cambiar por advanced

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedActivityCreator);