// import React from 'react';
import React, { useEffect, useState } from 'react';
import styles from "./PopUpActivity.module.css"
import { connect, useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
// import Popup from 'react-popup';
// import 'reactjs-popup/dist/index.css';


// import React from "react";
import Popup from "./PopUp"; 

function PopUpActivity(props) {
    const { name } = props
    const { allActivities } = props;
    const activityFound = allActivities.filter((element)=> {return element?.name===name})
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
   
    useEffect(() => {
        dispatch (getActivities())
        
        console.log("ACTIVIDADES:", activityFound[0]?.name )
        //console.log(dispatch (getCountryDetailByString("islan")))
      }, [isOpen]);
    
    const togglePopup = () => {
      setIsOpen(!isOpen);
    
    }
   
return(
    <div>
      <input
        type="button"
        value={name}
        onClick={togglePopup}
      /> 
      {/* <p>hola</p> */}

      {isOpen && 
        <Popup 
            name={name}
            content={<>
                <h1 className={styles.textH1}> {activityFound[0].name} </h1>
                <h2 className={styles.textH2}> Difficulty: {activityFound[0].difficulty} </h2>
                <h2 className={styles.textH2}> Duration: {activityFound[0].duration} </h2>
                <h2 className={styles.textH2}> Season: {activityFound[0].season} </h2>
                {/* <h2> {activityFound[0].name} </h2> */}

                {/* <b>Design your Popup: marcelo</b>
                <button>Test button</button> */}
                </>}
            handleClose={togglePopup}
        />}
    </div>
    )
  }
   
//   export default PopUpActivity;


export function mapStateToProps(state) {
    return {
      allActivities: state.allActivities,
    }
}
export function mapDispatchToProps(dispatch) {
    return {
      getActivities: () => dispatch ( getActivities() ),
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PopUpActivity);

// export function PopUpActivity() {
//     return (
//       <Popup trigger={<button> Trigger</button>} position="right center">
//         <div>Popup content here !!</div>
//       </Popup>
//     )
//     }




// function PopUpActivity() {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClick = () => {
//     setShowPopup(true);
//   }

//   const handleClose = () => {
//     setShowPopup(false);
//   }

//   return (
//     <div>
//       <button onClick={handleClick} style={{ all: "unset"}}>Show Popup</button>
//       {showPopup &&
//         <div className="popup-container">
//           <div className="popup-background" onClick={handleClose}></div>
//           <div className="popup-content">
//             <p>This is the popup content.</p>
//             <button onClick={handleClose} style={{ all: "unset"}}>Close</button>
//           </div>
//         </div>
//       }
//     </div>
//   );
// }

// export default PopUpActivity;