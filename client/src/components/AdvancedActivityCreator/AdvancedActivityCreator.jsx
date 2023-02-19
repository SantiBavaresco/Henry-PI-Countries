import React from 'react';
import { useState } from 'react';
import "./AdvancedActivityCreator.model.css"
import DualColumnScrollBarLabel from './DualColumnScrollBarLabel';


function AdvancedActivityCreator() {
    const [selectedOption, setSelectedOption] = useState('Option 1');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  // Example data for the selector, activities, and countries
  const selectorOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const activityOptions = ['Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3','Activity 1', 'Activity 2', 'Activity 3'];
  const countryOptions = ['Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3',
  'Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2',
   'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1',
    'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3',
    'Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 
    'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2', 'Country 3','Country 1', 'Country 2',
     'Country 3','Country 1', 'Country 2', 'Country 3'];

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
  };

  const handleCountryChange = (event) => {
    const country = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c !== country));
    }
  };

  return (
    
    <table>
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
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={activity}
                    checked={selectedActivities.includes(activity)}
                    onChange={handleActivityChange}
                  />
                  {activity}
                </label>
              </div>
            ))}
          </td>
          <td>
          <DualColumnScrollBarLabel/>
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

export default AdvancedActivityCreator;