import React from 'react';
import { useState , useEffect } from 'react';
import styles from "./AdvancedActivityCreator.module.css"
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCountries, getActivities, clearError, createAdvancedActivity} from "../../redux/actions";
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';
import ActivityScrollBarLabel  from './ActivityScrollBarLabel';
import Error404 from "../Error404/Error404";

function AdvancedActivityCreator(props) {
  const dispatch = useDispatch();
  const { allCountries, allActivities} = props;

  const activityOptions = allActivities.map( (element)=> {return element.name})


  const [ActivitiesArray, setActivitiesArray] = useState([]); // aca me viene la data del input (name,diff,dur,season)
  const [dualColumnArray, setDualColumnArray] = useState([]); // aca me viene la data del scroll (paises)

  const [formSuccess, setFormSuccess] = useState(false);
  const error = useSelector(state => state.error);

  let emptyCountries = true;
  let emptyActivity = true;

  const parseActivityArray = (array) => {
    return allActivities?.filter( obj => array?.[1]?.[0].includes(obj.name) ).map(obj => obj.id) 
  }
  const idActivitiesArray =  parseActivityArray(ActivitiesArray)

  useEffect(() => {
    dispatch (getAllCountries());
    dispatch (getActivities());
  }, [ActivitiesArray, dualColumnArray]);
  
  const updateArrayCountries = (newValue) => {
    setDualColumnArray([dualColumnArray, newValue ]);
  };

  const updateArrayActivities = (newValue) => {
      setActivitiesArray([ActivitiesArray, newValue ]);
    };
    

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };


const handleSubmit = async(event) => {
    event.preventDefault();

    if(dualColumnArray[1][0].length === 0) { emptyCountries=true; }
    else { emptyCountries=false }

    if(ActivitiesArray.length === 0) { emptyActivity = true; }
    else { emptyActivity = false; }

    if(!emptyActivity && !emptyCountries ){
        await props.createAdvancedActivity (ActivityResponseBuilder(idActivitiesArray, dualColumnArray[1][0]) )
        handleReturn()

    }

    if(error?.message === null) {alert("Activity created succesfully !");}

    else if (error == "Unexpected token 'A'") {
      let msg = "Duplicated Key"
      // if(error) msg = error;
      
      return (
        <div> 
          <Error404 error={msg}/>
        </div>
      )
    }

    dispatch (clearError(null))()

  };

  const ActivityResponseBuilder = (ActivitiesArray, dualColumnArray) => {
    return { 
              arrayActivities: ActivitiesArray,
              arrayCountries: dualColumnArray,
            }
  }

  function handleReturn() {
    window.history.back()
  }

  return (
  <div className={styles.tableBG}>
    <table className={styles.tableAdvanced}>
      <thead>
        <tr>
          <th>Select activities</th>
          <th>Select countries</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td>
            <ActivityScrollBarLabel 
              array={ActivitiesArray} 
              updateArrayActivities={updateArrayActivities}  
              AllActivities={allActivities} 
              // disabled={randomIsChecked}
            />

          </td>
          <td>
          <DualColumnScrollBarLabel 
            array={dualColumnArray} 
            updateArrayCountries={updateArrayCountries}  
            AllCountries={allCountries} 
            // disabled={randomIsChecked}
          />
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px" }}>
      <div style={{display:"flex", justifyContent: "space-evenly", paddingRight: "10px"}}>
        <button type="submit" onClick={handleSubmit} disabled={false} style={{width:"150px", height:"40px"}}>
          Create Activity</button>
      </div>
      <div style={{display:"flex", justifyContent: "space-evenly"}}>
        <button onClick={handleReturn} style={{height:"40px"}}>Back</button>
      </div>

    </div>
  </div>

)}



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
    createAdvancedActivity: (activity) => dispatch( createAdvancedActivity(activity) ) // cambiar por advanced

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedActivityCreator);